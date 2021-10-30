import { InjectedConnector } from '@web3-react/injected-connector'
import { supportedChainIds } from './web3.constants'


export const injected = new InjectedConnector({ supportedChainIds: supportedChainIds })
