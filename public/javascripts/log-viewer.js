

const connection= new WebSocket('"ws://localhost:3000"')

const logwindow= document.querySelector('#log-window')



    connection.onopen =()=>{
        connection.send('hello form WebSocket Client')

    }

    connection.onmessage =(event)=>{
        logwindow.innerHTML= event.data
    }