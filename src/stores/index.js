import storage from 'store2'
import ContractStore from './ContractStore';
import ReservedTokenStore from './ReservedTokenStore';
import StepTwoValidationStore from './StepTwoValidationStore';
import TierStore from './TierStore';
import TokenStore from './TokenStore';
import Web3Store from './Web3Store';
import GeneralStore from './GeneralStore'
import CrowdsalePageStore from './CrowdsalePageStore'
import ContributeStore from './ContributeStore'
import CrowdsaleStore from './CrowdsaleStore'
import GasPriceStore from './GasPriceStore'
import DeploymentStore from './DeploymentStore'

// Clear local storage if there is no incomplete deployment
if (storage.has('DeploymentStore') && storage.get('DeploymentStore').deploymentStep === null) {
  localStorage.clear()
}

const generalStore = new GeneralStore()
const crowdsalePageStore = new CrowdsalePageStore()
const contractStore = new ContractStore()
const reservedTokenStore = new ReservedTokenStore()
const stepTwoValidationStore = new StepTwoValidationStore()
const tierStore = new TierStore()
const tokenStore = new TokenStore()
const web3Store = new Web3Store()
const contributeStore = new ContributeStore()
const crowdsaleStore = new CrowdsaleStore()
const gasPriceStore = new GasPriceStore()
const deploymentStore = new DeploymentStore()

export {
  generalStore,
  crowdsalePageStore,
  contractStore,
  reservedTokenStore,
  stepTwoValidationStore,
  tierStore,
  tokenStore,
  web3Store,
  contributeStore,
  crowdsaleStore,
  gasPriceStore,
  deploymentStore
};
