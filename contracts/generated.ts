// Generated by @wagmi/cli@1.1.0 on 6/7/2023 at 10:01:18 PM
import {
  useContractRead,
  UseContractReadConfig,
  useContractWrite,
  UseContractWriteConfig,
  usePrepareContractWrite,
  UsePrepareContractWriteConfig,
  useContractEvent,
  UseContractEventConfig,
} from 'wagmi'
import {
  ReadContractResult,
  WriteContractMode,
  PrepareWriteContractResult,
} from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// communityEngine
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const communityEngineABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [{ name: 'oracle', internalType: 'address', type: 'address' }],
  },
  { type: 'error', inputs: [], name: 'AgreementAlreadySigned' },
  { type: 'error', inputs: [], name: 'EmptyArgs' },
  { type: 'error', inputs: [], name: 'EmptySecrets' },
  { type: 'error', inputs: [], name: 'EmptySource' },
  { type: 'error', inputs: [], name: 'NoInlineSecrets' },
  { type: 'error', inputs: [], name: 'ProjectDoesNotExist' },
  { type: 'error', inputs: [], name: 'RequestIsAlreadyPending' },
  { type: 'error', inputs: [], name: 'RequestIsNotPending' },
  { type: 'error', inputs: [], name: 'SenderIsNotRegistry' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      { name: 'result', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'err', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'OCRResponse',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
    ],
    name: 'RequestFulfilled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: true },
    ],
    name: 'RequestSent',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'projectName', internalType: 'string', type: 'string' },
      { name: 'kol', internalType: 'address', type: 'address' },
      { name: 'tokenAddress', internalType: 'address', type: 'address' },
      { name: 'numTokensToPayout', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addProject',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'oracleAddress', internalType: 'address', type: 'address' },
      { name: 'requestId', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'addSimulatedRequestId',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      {
        name: 'req',
        internalType: 'struct Functions.Request',
        type: 'tuple',
        components: [
          {
            name: 'codeLocation',
            internalType: 'enum Functions.Location',
            type: 'uint8',
          },
          {
            name: 'secretsLocation',
            internalType: 'enum Functions.Location',
            type: 'uint8',
          },
          {
            name: 'language',
            internalType: 'enum Functions.CodeLanguage',
            type: 'uint8',
          },
          { name: 'source', internalType: 'string', type: 'string' },
          { name: 'secrets', internalType: 'bytes', type: 'bytes' },
          { name: 'args', internalType: 'string[]', type: 'string[]' },
        ],
      },
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'gasLimit', internalType: 'uint32', type: 'uint32' },
      { name: 'gasPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'estimateCost',
    outputs: [{ name: '', internalType: 'uint96', type: 'uint96' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'source', internalType: 'string', type: 'string' },
      { name: 'secrets', internalType: 'bytes', type: 'bytes' },
      { name: 'args', internalType: 'string[]', type: 'string[]' },
      { name: 'subscriptionId', internalType: 'uint64', type: 'uint64' },
      { name: 'gasLimit', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'executeRequest',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getDONPublicKey',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getKOLProjects',
    outputs: [
      {
        name: '',
        internalType: 'struct CommunityEngine.Project[]',
        type: 'tuple[]',
        components: [
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'kol', internalType: 'address', type: 'address' },
          { name: 'tokenAddress', internalType: 'address', type: 'address' },
          {
            name: 'numTokensToPayout',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'isComplete', internalType: 'bool', type: 'bool' },
          { name: 'kolHasAgreed', internalType: 'bool', type: 'bool' },
          { name: 'exists', internalType: 'bool', type: 'bool' },
          { name: 'tweet', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getProjectOwnerProjects',
    outputs: [
      {
        name: '',
        internalType: 'struct CommunityEngine.Project[]',
        type: 'tuple[]',
        components: [
          { name: 'owner', internalType: 'address', type: 'address' },
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'kol', internalType: 'address', type: 'address' },
          { name: 'tokenAddress', internalType: 'address', type: 'address' },
          {
            name: 'numTokensToPayout',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'isComplete', internalType: 'bool', type: 'bool' },
          { name: 'kolHasAgreed', internalType: 'bool', type: 'bool' },
          { name: 'exists', internalType: 'bool', type: 'bool' },
          { name: 'tweet', internalType: 'string', type: 'string' },
        ],
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'requestId', internalType: 'bytes32', type: 'bytes32' },
      { name: 'response', internalType: 'bytes', type: 'bytes' },
      { name: 'err', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'handleOracleFulfillment',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'kolProjectMappings',
    outputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'projectName', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestError',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestRequestId',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'latestResponse',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'projectOwnerProjectNames',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'string', type: 'string' },
    ],
    name: 'projects',
    outputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'kol', internalType: 'address', type: 'address' },
      { name: 'tokenAddress', internalType: 'address', type: 'address' },
      { name: 'numTokensToPayout', internalType: 'uint256', type: 'uint256' },
      { name: 'isComplete', internalType: 'bool', type: 'bool' },
      { name: 'kolHasAgreed', internalType: 'bool', type: 'bool' },
      { name: 'exists', internalType: 'bool', type: 'bool' },
      { name: 'tweet', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'requestIdToProjectMapping',
    outputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'projectName', internalType: 'string', type: 'string' },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'projectName', internalType: 'string', type: 'string' },
      { name: 'tweet', internalType: 'string', type: 'string' },
    ],
    name: 'signAgreement',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'oracle', internalType: 'address', type: 'address' }],
    name: 'updateOracleAddress',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link communityEngineABI}__.
 */
export function useCommunityEngineRead<
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof communityEngineABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof communityEngineABI,
      TFunctionName,
      TSelectData
    >,
    'abi'
  > = {} as any,
) {
  return useContractRead({
    abi: communityEngineABI,
    ...config,
  } as UseContractReadConfig<
    typeof communityEngineABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"estimateCost"`.
 */
export function useCommunityEngineEstimateCost<
  TFunctionName extends 'estimateCost',
  TSelectData = ReadContractResult<typeof communityEngineABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof communityEngineABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: communityEngineABI,
    functionName: 'estimateCost',
    ...config,
  } as UseContractReadConfig<
    typeof communityEngineABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"getDONPublicKey"`.
 */
export function useCommunityEngineGetDonPublicKey<
  TFunctionName extends 'getDONPublicKey',
  TSelectData = ReadContractResult<typeof communityEngineABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof communityEngineABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: communityEngineABI,
    functionName: 'getDONPublicKey',
    ...config,
  } as UseContractReadConfig<
    typeof communityEngineABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"getKOLProjects"`.
 */
export function useCommunityEngineGetKolProjects<
  TFunctionName extends 'getKOLProjects',
  TSelectData = ReadContractResult<typeof communityEngineABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof communityEngineABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: communityEngineABI,
    functionName: 'getKOLProjects',
    ...config,
  } as UseContractReadConfig<
    typeof communityEngineABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"getProjectOwnerProjects"`.
 */
export function useCommunityEngineGetProjectOwnerProjects<
  TFunctionName extends 'getProjectOwnerProjects',
  TSelectData = ReadContractResult<typeof communityEngineABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof communityEngineABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: communityEngineABI,
    functionName: 'getProjectOwnerProjects',
    ...config,
  } as UseContractReadConfig<
    typeof communityEngineABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"kolProjectMappings"`.
 */
export function useCommunityEngineKolProjectMappings<
  TFunctionName extends 'kolProjectMappings',
  TSelectData = ReadContractResult<typeof communityEngineABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof communityEngineABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: communityEngineABI,
    functionName: 'kolProjectMappings',
    ...config,
  } as UseContractReadConfig<
    typeof communityEngineABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"latestError"`.
 */
export function useCommunityEngineLatestError<
  TFunctionName extends 'latestError',
  TSelectData = ReadContractResult<typeof communityEngineABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof communityEngineABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: communityEngineABI,
    functionName: 'latestError',
    ...config,
  } as UseContractReadConfig<
    typeof communityEngineABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"latestRequestId"`.
 */
export function useCommunityEngineLatestRequestId<
  TFunctionName extends 'latestRequestId',
  TSelectData = ReadContractResult<typeof communityEngineABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof communityEngineABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: communityEngineABI,
    functionName: 'latestRequestId',
    ...config,
  } as UseContractReadConfig<
    typeof communityEngineABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"latestResponse"`.
 */
export function useCommunityEngineLatestResponse<
  TFunctionName extends 'latestResponse',
  TSelectData = ReadContractResult<typeof communityEngineABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof communityEngineABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: communityEngineABI,
    functionName: 'latestResponse',
    ...config,
  } as UseContractReadConfig<
    typeof communityEngineABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"owner"`.
 */
export function useCommunityEngineOwner<
  TFunctionName extends 'owner',
  TSelectData = ReadContractResult<typeof communityEngineABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof communityEngineABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: communityEngineABI,
    functionName: 'owner',
    ...config,
  } as UseContractReadConfig<
    typeof communityEngineABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"projectOwnerProjectNames"`.
 */
export function useCommunityEngineProjectOwnerProjectNames<
  TFunctionName extends 'projectOwnerProjectNames',
  TSelectData = ReadContractResult<typeof communityEngineABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof communityEngineABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: communityEngineABI,
    functionName: 'projectOwnerProjectNames',
    ...config,
  } as UseContractReadConfig<
    typeof communityEngineABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"projects"`.
 */
export function useCommunityEngineProjects<
  TFunctionName extends 'projects',
  TSelectData = ReadContractResult<typeof communityEngineABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof communityEngineABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: communityEngineABI,
    functionName: 'projects',
    ...config,
  } as UseContractReadConfig<
    typeof communityEngineABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"requestIdToProjectMapping"`.
 */
export function useCommunityEngineRequestIdToProjectMapping<
  TFunctionName extends 'requestIdToProjectMapping',
  TSelectData = ReadContractResult<typeof communityEngineABI, TFunctionName>,
>(
  config: Omit<
    UseContractReadConfig<
      typeof communityEngineABI,
      TFunctionName,
      TSelectData
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return useContractRead({
    abi: communityEngineABI,
    functionName: 'requestIdToProjectMapping',
    ...config,
  } as UseContractReadConfig<
    typeof communityEngineABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link communityEngineABI}__.
 */
export function useCommunityEngineWrite<
  TFunctionName extends string,
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof communityEngineABI,
          string
        >['request']['abi'],
        TFunctionName,
        TMode
      >
    : UseContractWriteConfig<
        typeof communityEngineABI,
        TFunctionName,
        TMode
      > & {
        abi?: never
      } = {} as any,
) {
  return useContractWrite<typeof communityEngineABI, TFunctionName, TMode>({
    abi: communityEngineABI,
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"acceptOwnership"`.
 */
export function useCommunityEngineAcceptOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof communityEngineABI,
          'acceptOwnership'
        >['request']['abi'],
        'acceptOwnership',
        TMode
      > & { functionName?: 'acceptOwnership' }
    : UseContractWriteConfig<
        typeof communityEngineABI,
        'acceptOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'acceptOwnership'
      } = {} as any,
) {
  return useContractWrite<typeof communityEngineABI, 'acceptOwnership', TMode>({
    abi: communityEngineABI,
    functionName: 'acceptOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"addProject"`.
 */
export function useCommunityEngineAddProject<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof communityEngineABI,
          'addProject'
        >['request']['abi'],
        'addProject',
        TMode
      > & { functionName?: 'addProject' }
    : UseContractWriteConfig<typeof communityEngineABI, 'addProject', TMode> & {
        abi?: never
        functionName?: 'addProject'
      } = {} as any,
) {
  return useContractWrite<typeof communityEngineABI, 'addProject', TMode>({
    abi: communityEngineABI,
    functionName: 'addProject',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"addSimulatedRequestId"`.
 */
export function useCommunityEngineAddSimulatedRequestId<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof communityEngineABI,
          'addSimulatedRequestId'
        >['request']['abi'],
        'addSimulatedRequestId',
        TMode
      > & { functionName?: 'addSimulatedRequestId' }
    : UseContractWriteConfig<
        typeof communityEngineABI,
        'addSimulatedRequestId',
        TMode
      > & {
        abi?: never
        functionName?: 'addSimulatedRequestId'
      } = {} as any,
) {
  return useContractWrite<
    typeof communityEngineABI,
    'addSimulatedRequestId',
    TMode
  >({
    abi: communityEngineABI,
    functionName: 'addSimulatedRequestId',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"executeRequest"`.
 */
export function useCommunityEngineExecuteRequest<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof communityEngineABI,
          'executeRequest'
        >['request']['abi'],
        'executeRequest',
        TMode
      > & { functionName?: 'executeRequest' }
    : UseContractWriteConfig<
        typeof communityEngineABI,
        'executeRequest',
        TMode
      > & {
        abi?: never
        functionName?: 'executeRequest'
      } = {} as any,
) {
  return useContractWrite<typeof communityEngineABI, 'executeRequest', TMode>({
    abi: communityEngineABI,
    functionName: 'executeRequest',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"handleOracleFulfillment"`.
 */
export function useCommunityEngineHandleOracleFulfillment<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof communityEngineABI,
          'handleOracleFulfillment'
        >['request']['abi'],
        'handleOracleFulfillment',
        TMode
      > & { functionName?: 'handleOracleFulfillment' }
    : UseContractWriteConfig<
        typeof communityEngineABI,
        'handleOracleFulfillment',
        TMode
      > & {
        abi?: never
        functionName?: 'handleOracleFulfillment'
      } = {} as any,
) {
  return useContractWrite<
    typeof communityEngineABI,
    'handleOracleFulfillment',
    TMode
  >({
    abi: communityEngineABI,
    functionName: 'handleOracleFulfillment',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"signAgreement"`.
 */
export function useCommunityEngineSignAgreement<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof communityEngineABI,
          'signAgreement'
        >['request']['abi'],
        'signAgreement',
        TMode
      > & { functionName?: 'signAgreement' }
    : UseContractWriteConfig<
        typeof communityEngineABI,
        'signAgreement',
        TMode
      > & {
        abi?: never
        functionName?: 'signAgreement'
      } = {} as any,
) {
  return useContractWrite<typeof communityEngineABI, 'signAgreement', TMode>({
    abi: communityEngineABI,
    functionName: 'signAgreement',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useCommunityEngineTransferOwnership<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof communityEngineABI,
          'transferOwnership'
        >['request']['abi'],
        'transferOwnership',
        TMode
      > & { functionName?: 'transferOwnership' }
    : UseContractWriteConfig<
        typeof communityEngineABI,
        'transferOwnership',
        TMode
      > & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any,
) {
  return useContractWrite<
    typeof communityEngineABI,
    'transferOwnership',
    TMode
  >({
    abi: communityEngineABI,
    functionName: 'transferOwnership',
    ...config,
  } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"updateOracleAddress"`.
 */
export function useCommunityEngineUpdateOracleAddress<
  TMode extends WriteContractMode = undefined,
>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<
        PrepareWriteContractResult<
          typeof communityEngineABI,
          'updateOracleAddress'
        >['request']['abi'],
        'updateOracleAddress',
        TMode
      > & { functionName?: 'updateOracleAddress' }
    : UseContractWriteConfig<
        typeof communityEngineABI,
        'updateOracleAddress',
        TMode
      > & {
        abi?: never
        functionName?: 'updateOracleAddress'
      } = {} as any,
) {
  return useContractWrite<
    typeof communityEngineABI,
    'updateOracleAddress',
    TMode
  >({
    abi: communityEngineABI,
    functionName: 'updateOracleAddress',
    ...config,
  } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link communityEngineABI}__.
 */
export function usePrepareCommunityEngineWrite<TFunctionName extends string>(
  config: Omit<
    UsePrepareContractWriteConfig<typeof communityEngineABI, TFunctionName>,
    'abi'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: communityEngineABI,
    ...config,
  } as UsePrepareContractWriteConfig<typeof communityEngineABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"acceptOwnership"`.
 */
export function usePrepareCommunityEngineAcceptOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<typeof communityEngineABI, 'acceptOwnership'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: communityEngineABI,
    functionName: 'acceptOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof communityEngineABI,
    'acceptOwnership'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"addProject"`.
 */
export function usePrepareCommunityEngineAddProject(
  config: Omit<
    UsePrepareContractWriteConfig<typeof communityEngineABI, 'addProject'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: communityEngineABI,
    functionName: 'addProject',
    ...config,
  } as UsePrepareContractWriteConfig<typeof communityEngineABI, 'addProject'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"addSimulatedRequestId"`.
 */
export function usePrepareCommunityEngineAddSimulatedRequestId(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof communityEngineABI,
      'addSimulatedRequestId'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: communityEngineABI,
    functionName: 'addSimulatedRequestId',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof communityEngineABI,
    'addSimulatedRequestId'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"executeRequest"`.
 */
export function usePrepareCommunityEngineExecuteRequest(
  config: Omit<
    UsePrepareContractWriteConfig<typeof communityEngineABI, 'executeRequest'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: communityEngineABI,
    functionName: 'executeRequest',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof communityEngineABI,
    'executeRequest'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"handleOracleFulfillment"`.
 */
export function usePrepareCommunityEngineHandleOracleFulfillment(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof communityEngineABI,
      'handleOracleFulfillment'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: communityEngineABI,
    functionName: 'handleOracleFulfillment',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof communityEngineABI,
    'handleOracleFulfillment'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"signAgreement"`.
 */
export function usePrepareCommunityEngineSignAgreement(
  config: Omit<
    UsePrepareContractWriteConfig<typeof communityEngineABI, 'signAgreement'>,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: communityEngineABI,
    functionName: 'signAgreement',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof communityEngineABI,
    'signAgreement'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareCommunityEngineTransferOwnership(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof communityEngineABI,
      'transferOwnership'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: communityEngineABI,
    functionName: 'transferOwnership',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof communityEngineABI,
    'transferOwnership'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link communityEngineABI}__ and `functionName` set to `"updateOracleAddress"`.
 */
export function usePrepareCommunityEngineUpdateOracleAddress(
  config: Omit<
    UsePrepareContractWriteConfig<
      typeof communityEngineABI,
      'updateOracleAddress'
    >,
    'abi' | 'functionName'
  > = {} as any,
) {
  return usePrepareContractWrite({
    abi: communityEngineABI,
    functionName: 'updateOracleAddress',
    ...config,
  } as UsePrepareContractWriteConfig<
    typeof communityEngineABI,
    'updateOracleAddress'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link communityEngineABI}__.
 */
export function useCommunityEngineEvent<TEventName extends string>(
  config: Omit<
    UseContractEventConfig<typeof communityEngineABI, TEventName>,
    'abi'
  > = {} as any,
) {
  return useContractEvent({
    abi: communityEngineABI,
    ...config,
  } as UseContractEventConfig<typeof communityEngineABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link communityEngineABI}__ and `eventName` set to `"OCRResponse"`.
 */
export function useCommunityEngineOcrResponseEvent(
  config: Omit<
    UseContractEventConfig<typeof communityEngineABI, 'OCRResponse'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: communityEngineABI,
    eventName: 'OCRResponse',
    ...config,
  } as UseContractEventConfig<typeof communityEngineABI, 'OCRResponse'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link communityEngineABI}__ and `eventName` set to `"OwnershipTransferRequested"`.
 */
export function useCommunityEngineOwnershipTransferRequestedEvent(
  config: Omit<
    UseContractEventConfig<
      typeof communityEngineABI,
      'OwnershipTransferRequested'
    >,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: communityEngineABI,
    eventName: 'OwnershipTransferRequested',
    ...config,
  } as UseContractEventConfig<
    typeof communityEngineABI,
    'OwnershipTransferRequested'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link communityEngineABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useCommunityEngineOwnershipTransferredEvent(
  config: Omit<
    UseContractEventConfig<typeof communityEngineABI, 'OwnershipTransferred'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: communityEngineABI,
    eventName: 'OwnershipTransferred',
    ...config,
  } as UseContractEventConfig<
    typeof communityEngineABI,
    'OwnershipTransferred'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link communityEngineABI}__ and `eventName` set to `"RequestFulfilled"`.
 */
export function useCommunityEngineRequestFulfilledEvent(
  config: Omit<
    UseContractEventConfig<typeof communityEngineABI, 'RequestFulfilled'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: communityEngineABI,
    eventName: 'RequestFulfilled',
    ...config,
  } as UseContractEventConfig<typeof communityEngineABI, 'RequestFulfilled'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link communityEngineABI}__ and `eventName` set to `"RequestSent"`.
 */
export function useCommunityEngineRequestSentEvent(
  config: Omit<
    UseContractEventConfig<typeof communityEngineABI, 'RequestSent'>,
    'abi' | 'eventName'
  > = {} as any,
) {
  return useContractEvent({
    abi: communityEngineABI,
    eventName: 'RequestSent',
    ...config,
  } as UseContractEventConfig<typeof communityEngineABI, 'RequestSent'>)
}