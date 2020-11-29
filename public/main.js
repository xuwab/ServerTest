const cssRequest = new XMLHttpRequest()

cssRequest.open('GET',"./style.css")
cssRequest.onreadystatechange = ()=>{
    if(cssRequest.readyState === 4 && cssRequest.status === 200){
        const styleElement = document.createElement('style');
        styleElement.innerHTML = cssRequest.response
        document.head.appendChild(styleElement)
    }
}

cssRequest.send()