import { Container } from 'unstated-x'

export interface IDataContainerState {
	id?: string | number
}


export class DataContainer extends Container<any> {
	
	constructor(state?: any, genId: boolean = true) {
		super(state)
		
		this.state  = state
	}
	addQuestion (question : any  ) {
		// @ts-ignore
		const {questions} =   this.state
		const newListQuestion =  [...questions , ...[question]]

		this.setState({questions :  newListQuestion})
	}
	updateVideo (question:any)  {

	}
}

export const dataContainer  = new DataContainer(
	{
		id: "1",
		name_video : "Học tiếng Anh",
		des : "Bai Tap Phan Biet A an" ,
		time_line : "alo alo ",
		video_url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
		questions : [
			{
				id: "1",
				time: 5,
				type: "quiz",
				question: "Chọn đáp án thể hiện đúng cách dùng mạo từ a, an?",
				answers: ["A: a pen", "B: a hour", "C: an car", "D: a eraser"],
				correct: 0,
				note:
					'Bai Tap Phan Biet A an".',
			}
		]
	})
export default DataContainer
// @ts-ignore
window['duc']  = dataContainer

export class MangerCource extends Container<any> {

	constructor(state?: any, genId: boolean = true) {
		super(state)

		this.state  = state
	}
	addQuestion (question : any  ) {
		// @ts-ignore
		const {questions} =   this.state
		const newListQuestion =  [...questions , ...[question]]

		this.setState({questions :  newListQuestion})
	}
	updateVideo (question:any)  {

	}
}