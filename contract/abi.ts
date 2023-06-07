export const abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'oracle',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'AgreementAlreadySigned',
    type: 'error',
  },
  {
    inputs: [],
    name: 'EmptyArgs',
    type: 'error',
  },
  {
    inputs: [],
    name: 'EmptySecrets',
    type: 'error',
  },
  {
    inputs: [],
    name: 'EmptySource',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NoInlineSecrets',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ProjectDoesNotExist',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RequestIsAlreadyPending',
    type: 'error',
  },
  {
    inputs: [],
    name: 'RequestIsNotPending',
    type: 'error',
  },
  {
    inputs: [],
    name: 'SenderIsNotRegistry',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'requestId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'result',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'err',
        type: 'bytes',
      },
    ],
    name: 'OCRResponse',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferRequested',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
    ],
    name: 'RequestFulfilled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'id',
        type: 'bytes32',
      },
    ],
    name: 'RequestSent',
    type: 'event',
  },
  {
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'projectName',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'kol',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'numTokensToPayout',
        type: 'uint256',
      },
    ],
    name: 'addProject',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'oracleAddress',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'requestId',
        type: 'bytes32',
      },
    ],
    name: 'addSimulatedRequestId',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'enum Functions.Location',
            name: 'codeLocation',
            type: 'uint8',
          },
          {
            internalType: 'enum Functions.Location',
            name: 'secretsLocation',
            type: 'uint8',
          },
          {
            internalType: 'enum Functions.CodeLanguage',
            name: 'language',
            type: 'uint8',
          },
          {
            internalType: 'string',
            name: 'source',
            type: 'string',
          },
          {
            internalType: 'bytes',
            name: 'secrets',
            type: 'bytes',
          },
          {
            internalType: 'string[]',
            name: 'args',
            type: 'string[]',
          },
        ],
        internalType: 'struct Functions.Request',
        name: 'req',
        type: 'tuple',
      },
      {
        internalType: 'uint64',
        name: 'subscriptionId',
        type: 'uint64',
      },
      {
        internalType: 'uint32',
        name: 'gasLimit',
        type: 'uint32',
      },
      {
        internalType: 'uint256',
        name: 'gasPrice',
        type: 'uint256',
      },
    ],
    name: 'estimateCost',
    outputs: [
      {
        internalType: 'uint96',
        name: '',
        type: 'uint96',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'source',
        type: 'string',
      },
      {
        internalType: 'bytes',
        name: 'secrets',
        type: 'bytes',
      },
      {
        internalType: 'string[]',
        name: 'args',
        type: 'string[]',
      },
      {
        internalType: 'uint64',
        name: 'subscriptionId',
        type: 'uint64',
      },
      {
        internalType: 'uint32',
        name: 'gasLimit',
        type: 'uint32',
      },
    ],
    name: 'executeRequest',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getDONPublicKey',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getKOLProjects',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'kol',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'tokenAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'numTokensToPayout',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'isComplete',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'kolHasAgreed',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'exists',
            type: 'bool',
          },
          {
            internalType: 'string',
            name: 'tweet',
            type: 'string',
          },
        ],
        internalType: 'struct CommunityEngine.Project[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getProjectOwnerProjects',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'kol',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'tokenAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'numTokensToPayout',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'isComplete',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'kolHasAgreed',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'exists',
            type: 'bool',
          },
          {
            internalType: 'string',
            name: 'tweet',
            type: 'string',
          },
        ],
        internalType: 'struct CommunityEngine.Project[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'requestId',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'response',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'err',
        type: 'bytes',
      },
    ],
    name: 'handleOracleFulfillment',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'kolProjectMappings',
    outputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'projectName',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'latestError',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'latestRequestId',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'latestResponse',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'projectOwnerProjectNames',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'projects',
    outputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'kol',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'tokenAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'numTokensToPayout',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isComplete',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'kolHasAgreed',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'exists',
        type: 'bool',
      },
      {
        internalType: 'string',
        name: 'tweet',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'projectName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'tweet',
        type: 'string',
      },
    ],
    name: 'signAgreement',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'oracle',
        type: 'address',
      },
    ],
    name: 'updateOracleAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export default abi;
