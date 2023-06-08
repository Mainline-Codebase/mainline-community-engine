// "use client"

import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import executeRequest from '../systems/request/request';

function Request() {
  const [inputAmount, setInputAmount] = useState(45);
  const [inputAPY, setInputAPY] = useState(10);
  const [inputMonths, setInputMonths] = useState(1);
  // const [latestRequest, setLatestRequest] = useState(null)
  const [latestRequest, setLatestRequest] = useState({ result: 42, cost: 0.3203042323 });
  const [isRequesting, setIsRequesting] = useState(false);
  const notification = useRef(null);

  const updateNotification = (message: any) => {
    if (notification.current) {
      toast.update(notification.current, {
        render: message,
        type: 'info',
        isLoading: true,
        autoClose: false,
      });
    }
  };

  const performRequest = async () => {
    // @ts-ignore
    notification.current = toast.loading('Initiating request...');
    setIsRequesting(true);

    const res = await executeRequest(
      [inputAmount.toString(), (inputAPY * 100).toString(), inputMonths.toString()],
      'mumbai',
      updateNotification,
    );

    if (res.error) {
      console.log('ERROR: ', res.result);
      const isKnownError = res.result.toString().includes('transaction failed');

      // @ts-ignore
      toast.update(notification.current, {
        render: `Request failed. ${isKnownError ? 'This subscription might be out of LINK.' : ''}`,
        type: 'error',
        isLoading: false,
        autoClose: 5000,
      });
    } else {
      // @ts-ignore
      toast.update(notification.current, {
        render: 'Request successful.',
        type: 'success',
        isLoading: false,
        autoClose: 5000,
      });

      setLatestRequest(res);
      console.log(res);
    }

    notification.current = null;
    setIsRequesting(false);
  };

  return (
    <div className="request">
      <div className="inputs">
        <div className="input">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={inputAmount}
            min={0}
            onChange={(e) => setInputAmount(Number(e.target.value))}
          />
        </div>

        <div className="input">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="apy">APY</label>
          <input type="number" id="apy" value={inputAPY} min={0} onChange={(e) => setInputAPY(Number(e.target.value))} />
        </div>

        <div className="input">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="months">Months</label>
          <input
            type="number"
            id="months"
            value={inputMonths}
            min={0}
            onChange={(e) => setInputMonths(Number(e.target.value))}
          />
        </div>
      </div>

      <button type="button" onClick={performRequest} disabled={isRequesting}>
        Perform Request
      </button>

      <div className="feedback">
        <h3>Latest Request</h3>
        {latestRequest ? (
          <>
            <div>
              Amount after interest
              <span className="emphasize">{latestRequest.result.toString()}</span>
            </div>
            <div>
              Request total cost
              <span className="emphasize">
                {latestRequest.cost}
                {' '}
                LINK
              </span>
            </div>
          </>
        ) : (
          <p>No request has been made yet.</p>
        )}
      </div>
    </div>
  );
}

export default Request;
