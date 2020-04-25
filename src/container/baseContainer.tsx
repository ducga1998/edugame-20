import { Container } from 'unstated-x'

export interface IDataContainerState {
	id?: string | number
}

export const registry: Map<string, DataContainer<IDataContainerState>> = new Map()

export class DataContainer<State extends IDataContainerState> extends Container<State> {
	
	constructor(state?: State, genId: boolean = true) {
		super(state)
		
	
	}
}

const shareContainer  = new DataContainer()
export default DataContainer
