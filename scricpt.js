$(function(){

const token ="IGQVJVcFdkdEVHazV1QjBkSV9OODctUGVsaXdzVURLMmxDT3o0S2FhSkljWlhBdmpqSzlaa01QX3NLRlZAxZAEhFczlrVXNKNkVTNEZA4a1YwU0VBdnlaVk9SY1VEdWc1MW9QZAlJGUWVFOG1nYXhGcVhaMQZDZD"
const url = "https://graph.instagram.com/me/media?access_token="+token+"&fields=media_url,media_type,caption,permalink"


$.get(url).then(function(response){
    console.log('retorno: ',response.data);
    let dadosJson = response.data
    let conteudo = '<div class="row" style="padding-left:5px">';
    
    for(let p = 0; p < dadosJson.length; p++ ) {
         let feed = dadosJson[p];
         let titulo = feed.caption !==null ? feed.caption : '';
         let tipo = feed.media_type;
         if(tipo === "VIDEO") { 

            conteudo +=   '<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 "><video style="width:100%;height:90%;"></video>  </div>';
           }



         else if (tipo === 'IMAGE'){
            conteudo += '<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4"><img title="'+titulo+'" alt="'+titulo+'" src="'+feed.media_url+'" onclick="window.open(\''+feed.permalink+'\');"</div>';
         }
    }
conteudo += "</div>";
$('#insta').html(conteudo);
})


});
