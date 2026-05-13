console.log ("Main funcionando");
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./meuserviceWorker.js')
    .then (function(registration){
        console.log('serviceWorker funcionando com sucesso')

    })
    .catch(function(error){
        console.log('Falha ao registrar o serviceWorker')
    });
}
    else{
        console.log('serviceWorkers não suportados')
    }
