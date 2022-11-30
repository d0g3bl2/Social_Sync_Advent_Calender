
// Global selected variables
    let dateSelect = document.querySelector('#date-select');
    const dateSubmitButton = document.querySelector('#submit-button');
    let localCurrentDate = localStorage.getItem('Date');
    
// Function to draw image and video items.
    function drawItems(container, id) {
        const imgItem = document.createElement('div');
        imgItem.className = 'img-items';
        imgItem.id = `img-item${id}`;
        
        const image = document.createElement('img');
        image.className = 'image';
        image.id = `image${id}`
        image.height = 360;
        image.width = 360;
        image.src = `https://picsum.photos/id/${randomNumber(20)}/400`
        imgItem.appendChild(image);

        const itemOverlay = document.createElement('div');
        itemOverlay.className = 'item-overlay';
        imgItem.appendChild(itemOverlay);

        const itemOverlayNumber = document.createElement('p');
        itemOverlayNumber.className = 'item-overlay-number';
        itemOverlayNumber.id = `item-overlay-number${id}`
        itemOverlayNumber.textContent = '';
        itemOverlay.appendChild(itemOverlayNumber);

        const dateValue = document.createElement('p');
        dateValue.className = 'item-date-value';
        dateValue.id = `item-date-value${id}`
        dateValue.textContent = '';
        itemOverlay.appendChild(dateValue);
        
        const viewButton = document.createElement('button');
        viewButton.className = 'view-button';
        viewButton.textContent = '🎄View🎄';
        itemOverlay.appendChild(viewButton);
    
        container.appendChild(imgItem);



        const videoItem = document.createElement('div');
        videoItem.className = 'video-items';
        videoItem.id = `video-item${id}`;
        
        const video = document.createElement('video');
        video.className = 'videos';
        video.id = `video${id}`;
        video.setAttribute("muted", "true");
        video.height = 360;
        video.width = 360;
        video.src = `./videos/${randomNumber(5)}.mp4`;
        video.preload = 'auto';
        video.setAttribute("controls", "");
        
        videoItem.appendChild(video);

        const videoItemOverlay = document.createElement('div');
        videoItemOverlay.className = 'video-item-overlay';
        videoItem.appendChild(videoItemOverlay);

        const videoItemOverlayNumber = document.createElement('p');
        videoItemOverlayNumber.className = 'video-item-overlay-number';
        videoItemOverlayNumber.id = `video-item-overlay-number${id}`
        videoItemOverlayNumber.textContent = '';
        videoItemOverlay.appendChild(videoItemOverlayNumber);

        const videoDateValue = document.createElement('p');
        videoDateValue.className = 'video-date-value';
        videoDateValue.id = `video-date-value${id}`
        videoDateValue.textContent = '';
        videoItemOverlay.appendChild(videoDateValue);

        const videoViewButton = document.createElement('button');
        videoViewButton.className = 'video-view-button';
        videoViewButton.textContent = '🎅View🎅';
        videoItemOverlay.appendChild(videoViewButton);
    
        container.appendChild(videoItem);

    }

// Function to draw grid and call draw items function.
    function drawGrid(container) {

        const grid = document.querySelector('.grid');
    
        for (let i = 0; i < 12; i++) {

                drawItems(grid, i);
        }
    
        container.appendChild(grid);
    }

    function loadPage() {

// This if statement populates local storage with a date if it doesn't already exist retrieves it from local storage if it does and updates the date input either way.

        if (!localStorage.getItem('Date')) {
            populateStorage();
          } else {
            retrieveDateValueFromLocalStorage();
          }

        const gridContainer = document.querySelector('#grid-container');

        drawGrid(gridContainer);
     
    }

    
    function randomNumber(limit) {
        return Math.floor(Math.random() * limit) + 1;
    }


    function renderItemNumbers() {
        const images = document.querySelectorAll('.item-overlay-number')
        const videos = document.querySelectorAll('.video-item-overlay-number')
        
        const imageItemNumberArray = [[2], [4], [6], [8], [10], [12], [14], [16], [18], [20], [22], [24]];
        
        const videoItemNumberArray = [[3], [5], [7], [9], [11], [13], [15], [17], [19], [21], [23], [25]];

        
        // const shuffledImageArray = imageItemNumberArray.sort((a, b) => 0.5 - Math.random());

        // const shuffledVideoArray = videoItemNumberArray.sort((a, b) => 0.5 - Math.random());


        for (let i = 0; i < 12; i++) {

            images[i].textContent = imageItemNumberArray[i];
            videos[i].textContent = videoItemNumberArray[i];
            
        }
    }

    loadPage();

    renderItemNumbers();
    
    dateSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        let currentDate = dateSelect.valueAsNumber;
        localStorage.setItem('Date', `${currentDate}`);
        localCurrentDate = localStorage.getItem('Date');
    })

    
    const buttons = document.querySelectorAll('.view-button');
    console.log(buttons);
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const overlay = e.currentTarget.parentElement;
            overlay.className = 'item-overlay open';
        })
    });
    
    const videoButtons = document.querySelectorAll('.video-view-button');
    
    console.log(videoButtons);

    videoButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const overlay = e.currentTarget.parentElement;
            overlay.className = 'video-item-overlay open';
            const video = e.currentTarget.parentElement.parentElement.children[0];
            console.log(video);
            // video.setAttribute("muted", "true");
            video.setAttribute("autoplay", "true");
            // video.autoplay = true;
            // video.muted = "true";
            
        }) 
    });

    // const buttons = document.querySelectorAll('button');
    
    // console.log(buttons);

    // buttons.forEach(button => {
        // button.addEventListener('click', (e) => {
            // const overlay = e.currentTarget.parentElement;
            // overlay.className = 'video-item-overlay open';
            // console.log(e.currentTarget.previousSibling.textContent);
            // console.log(dateSelect.value);

            // if (e.currentTarget.previousSibling.textContent <= dateSelect.value) {
            //     console.log('open')
            // } else {
            //     console.log('not allowed')
            // }

            // var dynamicPart = "XYZ";
// \074 is code for < and \076 is code for >
// var regexObj = new RegExp("\074" + dynamicPart + "\076");    // will match <XYZ>
// the line above is same as, var regex = /\074abc\076/;

// var input = "<XYZ> Some text </XYZ>";
// var output = regexObj.test(input);

// console.log(output);

            // let num = e.currentTarget.previousSibling.textContent;
            // console.log(num);

        //     let dynamicPart = num;
        //     console.log(dynamicPart);
        //     let regexObj = new RegExp(dynamicPart)
        //     console.log(regexObj);
        //     console.log(dateSelect.value);
            
        //     if (regexObj.test(dateSelect.value)) {
        //         console.log('open')
        //     } else {
        //         console.log('nope')
        //     }
        // }) 


    // });

    // function regExDateTest(){
    //     /e.currentTarget.previousSibling.textContent/.test(dateSelect.value)
    // }
    
    // function openCalenderDoor(boolean) {

    //     let dateSelected = dateSelect.value
    //     let paragraphTextcontent = 
    //         if (boolean === true) {
                
    //         } else {
                
    //         }
    // }

    
    
