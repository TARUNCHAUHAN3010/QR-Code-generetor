import QRCode from "qrcode"; 
import { useState } from 'react'

function App() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 800,
			margin: 2,
			color: {
				dark: '#335383FF',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
			setUrl('')
		})
	}

	return (
		<div className="app">
			 <div className="formaera m-2 text-center">
			<input className="qrinput"
				type="text"
				placeholder="e.g. https://google.com"
				value={url}
				onChange={e => setUrl(e.target.value)} />
			<button id="formbtn" className="btn btn-danger" onClick={GenerateQRCode}>Generate</button>
            </div>
			{qr && <>
				<img className="qrimg m-4" src={qr} />
				<button className="btn btn-success" href={qr} download="qrcode.png">Download</button>
			</>}
		</div>
	)
}

export default App