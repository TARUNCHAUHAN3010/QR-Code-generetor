import QRCode from 'qrcode'
import { useState } from 'react'


function QrCode() {
const [url,seturl] =  useState('')
const [qr,setqr] = useState('')
 
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
        setqr(url)
        seturl('')
    })
}


  return (
    <div className='qrApp'>
    
      <div className='fromaera text-center m-3'>
        <input className='inputaera' type="text" placeholder="  e.g. https://google.com" value={url} onChange={(e) =>seturl(e.target.value)} />
        <button id='qrbtn' className='btn btn-danger' onClick={GenerateQRCode}>Generate</button>
      </div>
       
      {qr && <>
				<img className='qrimage' src={qr} />
				<button className='btn btn-success' href={qr} download="qrcode.png">Download</button>
			</>}
    </div>
  );
}

export default QrCode;
