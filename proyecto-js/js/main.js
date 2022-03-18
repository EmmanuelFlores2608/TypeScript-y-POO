$(document).ready(function(){


    //Slider
    if (window.location.href.indexOf('index') >-1 ){
        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });
    }

    //Post
    if (window.location.href.indexOf('index') >-1 ){
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el día ' + moment().date() + ' de ' +  moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, tellus et consectetur congue, massa dolor vulputate sem, vel dictum nisl ante a elit. Sed consectetur lectus vitae interdum condimentum. Etiam sodales nunc at turpis lacinia tempus non nec purus. Nulla ullamcorper at elit non condimentum. Aliquam pharetra, ipsum vel dignissim facilisis, est felis consequat nunc, sit amet porttitor tellus enim eu nulla. Integer enim diam, molestie at quam eget, auctor laoreet quam. Nunc tempus est et nibh volutpat, egestas convallis sapien laoreet. Donec consectetur mollis consectetur. Nulla molestie, risus a pharetra venenatis, dolor orci ullamcorper lectus, non porta orci est hendrerit mi. Donec justo diam, dictum id blandit sed, scelerisque quis diam. Nunc vitae congue augue. Suspendisse ut nisi vel eros semper porta. Duis sit amet justo ut urna sollicitudin luctus ut ut nulla. Aliquam auctor eu orci ut feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla scelerisque tellus eget augue tristique sagittis.'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el día ' + moment().date() + ' de ' +  moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, tellus et consectetur congue, massa dolor vulputate sem, vel dictum nisl ante a elit. Sed consectetur lectus vitae interdum condimentum. Etiam sodales nunc at turpis lacinia tempus non nec purus. Nulla ullamcorper at elit non condimentum. Aliquam pharetra, ipsum vel dignissim facilisis, est felis consequat nunc, sit amet porttitor tellus enim eu nulla. Integer enim diam, molestie at quam eget, auctor laoreet quam. Nunc tempus est et nibh volutpat, egestas convallis sapien laoreet. Donec consectetur mollis consectetur. Nulla molestie, risus a pharetra venenatis, dolor orci ullamcorper lectus, non porta orci est hendrerit mi. Donec justo diam, dictum id blandit sed, scelerisque quis diam. Nunc vitae congue augue. Suspendisse ut nisi vel eros semper porta. Duis sit amet justo ut urna sollicitudin luctus ut ut nulla. Aliquam auctor eu orci ut feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla scelerisque tellus eget augue tristique sagittis.'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el día ' + moment().date() + ' de ' +  moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, tellus et consectetur congue, massa dolor vulputate sem, vel dictum nisl ante a elit. Sed consectetur lectus vitae interdum condimentum. Etiam sodales nunc at turpis lacinia tempus non nec purus. Nulla ullamcorper at elit non condimentum. Aliquam pharetra, ipsum vel dignissim facilisis, est felis consequat nunc, sit amet porttitor tellus enim eu nulla. Integer enim diam, molestie at quam eget, auctor laoreet quam. Nunc tempus est et nibh volutpat, egestas convallis sapien laoreet. Donec consectetur mollis consectetur. Nulla molestie, risus a pharetra venenatis, dolor orci ullamcorper lectus, non porta orci est hendrerit mi. Donec justo diam, dictum id blandit sed, scelerisque quis diam. Nunc vitae congue augue. Suspendisse ut nisi vel eros semper porta. Duis sit amet justo ut urna sollicitudin luctus ut ut nulla. Aliquam auctor eu orci ut feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla scelerisque tellus eget augue tristique sagittis.'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el día ' + moment().date() + ' de ' +  moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, tellus et consectetur congue, massa dolor vulputate sem, vel dictum nisl ante a elit. Sed consectetur lectus vitae interdum condimentum. Etiam sodales nunc at turpis lacinia tempus non nec purus. Nulla ullamcorper at elit non condimentum. Aliquam pharetra, ipsum vel dignissim facilisis, est felis consequat nunc, sit amet porttitor tellus enim eu nulla. Integer enim diam, molestie at quam eget, auctor laoreet quam. Nunc tempus est et nibh volutpat, egestas convallis sapien laoreet. Donec consectetur mollis consectetur. Nulla molestie, risus a pharetra venenatis, dolor orci ullamcorper lectus, non porta orci est hendrerit mi. Donec justo diam, dictum id blandit sed, scelerisque quis diam. Nunc vitae congue augue. Suspendisse ut nisi vel eros semper porta. Duis sit amet justo ut urna sollicitudin luctus ut ut nulla. Aliquam auctor eu orci ut feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla scelerisque tellus eget augue tristique sagittis.'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el día ' + moment().date() + ' de ' +  moment().format("MMMM") + ' del ' + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida, tellus et consectetur congue, massa dolor vulputate sem, vel dictum nisl ante a elit. Sed consectetur lectus vitae interdum condimentum. Etiam sodales nunc at turpis lacinia tempus non nec purus. Nulla ullamcorper at elit non condimentum. Aliquam pharetra, ipsum vel dignissim facilisis, est felis consequat nunc, sit amet porttitor tellus enim eu nulla. Integer enim diam, molestie at quam eget, auctor laoreet quam. Nunc tempus est et nibh volutpat, egestas convallis sapien laoreet. Donec consectetur mollis consectetur. Nulla molestie, risus a pharetra venenatis, dolor orci ullamcorper lectus, non porta orci est hendrerit mi. Donec justo diam, dictum id blandit sed, scelerisque quis diam. Nunc vitae congue augue. Suspendisse ut nisi vel eros semper porta. Duis sit amet justo ut urna sollicitudin luctus ut ut nulla. Aliquam auctor eu orci ut feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla scelerisque tellus eget augue tristique sagittis.'
            },
        ]
        console.log(posts)

        posts.forEach((item, index) =>{
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class=${item.date}</span>
                    <p>
                        ${item.content}    
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
            `;
            
            $("#posts").append(post);
        });
    }
    //Selector de tema

    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });
    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });

    //Scroll arriba de la web
    $(".subir").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    //Login falso
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo =  $("#about p");
        about_parrafo.html("<br><strong>Bienvendo, "+ form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");
        $("#login").hide();
        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }
    //Acordeón
    if (window.location.href.indexOf('about') >-1 ){
        $("#acordeon").accordion();
    }
    //Reloj
    if (window.location.href.indexOf('reloj') >-1 ){

        setInterval(function(){
            var reloj  = moment().format("h:mm:ss");
            $('#reloj').html(reloj);
        }, 1000);
    }

    if (window.location.href.indexOf('contact') >-1 ){
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }

});