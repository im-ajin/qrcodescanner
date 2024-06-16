import React, { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'

const QrCodeScanner = () => {
    const [scannigResult, setScanningResult] = useState(null);
    useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader',{
            qrbox: {
                width: 250,
                height: 250
            },
            fbs: 5,
        })
        scanner.render(success, error);
    
        function success(result){
           scanner.clear()
           setScanningResult(result)
        }
    
        function error(err){
          console.log(err)  
        }
    },[])
    
  return (
    <div>
        {scannigResult ? <div>
            <p style={{fontSize: '18px'}}>The code <span style={{fontWeight: 'bold'}}>{scannigResult}</span></p>
        </div> : 
        <div id='reader'>
         
        </div>
}
    </div>
  )
}

export default QrCodeScanner