let dg = document.getElementById("prn");
let pic = document.getElementById("pic");

const dog = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let datamsg = data.message;
            for (const key in datamsg) {
                if (datamsg[key].length === 0) {
                    dg.innerHTML += `<li class="list" onclick="img('${key}')">
                                        <a href="javascript:void(0);" class="active">
                                            <span>${key}</span>
                                        </a>
                                    </li>`;
                } else {
                    let sub = `<ul class="dropdown-menu">`;
                    datamsg[key].forEach(sublist => {
                        sub += `<li>
                                    <a href="javascript:void(0)">
                                        <span>${sublist}<i class="fa-solid fa-sort-down"></i></span>
                                    </a>
                                </li>`;
                    });
                    sub += `</ul>`;
                    dg.innerHTML += `<li class="list" onclick="img('${key}')"> 
                                        <a href="javascript:void(0)" class="dropdown active">${key}</a>${sub}</li>`;
                }
            }
        })
        .catch(error => {
            console.error('Error fetching dog breeds:', error);
        });
}

dog();

const img = (dog) => {
    fetch(`https://dog.ceo/api/breed/${dog}/images`)
        .then(res => res.json())
        .then((images) => {
            
            pic.innerHTML = "";

            const img = images.message;
            
            img.forEach((url) => {
                pic.innerHTML += `
                    <div class="col-4 d-flex my-1 " style="height:195px;">
                        <img src="${url}" alt=" " class="d-inline-block img-fluid rounded-1">
                    </div>`;
            });
        })
        .catch(error => {
            console.error(`Error`, error);
        });
}

$(document).ready(function () {
    $('.list').click(function () {
        $(this).children(".dropdown-menu").slideToggle("fast");
        $(this).toggleClass("active");
        $(this).siblings("li").children(".dropdown-menu").slideUp("fast");
        $(this).siblings("li").removeClass("active");
    });

    $("#bar").click(function () {
        $("body").toggleClass("close");
    });
});