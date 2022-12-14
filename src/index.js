
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
        const images = document.querySelectorAll('.item-overlay-number');
        const videos = document.querySelectorAll('.video-item-overlay-number');
        const imageDateValue = document.querySelectorAll('.item-date-value');
        const videoDateValue = document.querySelectorAll('.video-date-value');
        
        const imageItemNumberArray = [[2], [4], [6], [8], [10], [12], [14], [16], [18], [20], [22], [24]];
        
        const videoItemNumberArray = [[3], [5], [7], [9], [11], [13], [15], [17], [19], [21], [23], [25]];

        const imageItemDateValue = [[1669939200000], [1670112000000], [1670284800000], [1670457600000], [1670630400000], [1670803200000], [1670976000000], [1671148800000], [1671321600000], [1671494400000], [1671667200000], [1671840000000]];
        
        const videoItemDateValue = [[1670025600000], [1670198400000], [1670371200000], [1670544000000], [1670716800000], [1670889600000], [1671062400000], [1671235200000], [1671408000000], [1671580800000], [1671753600000], [1671926400000]];


        for (let i = 0; i < 12; i++) {

            images[i].textContent = imageItemNumberArray[i];
            videos[i].textContent = videoItemNumberArray[i];
            imageDateValue[i].textContent = imageItemDateValue[i];
            videoDateValue[i].textContent = videoItemDateValue[i];
            
        }

    }

    loadPage();

    renderItemNumbers();
    
    dateSubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        let currentDate = dateSelect.valueAsNumber;
        console.log(currentDate);
        localStorage.setItem('Date', `${currentDate}`);
        localCurrentDate = localStorage.getItem('Date');
    })

    
    const buttons = document.querySelectorAll('.view-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const overlay = e.currentTarget.parentElement;
            const dateValue = e.currentTarget.previousSibling;
            
            if (dateValue.textContent <= localCurrentDate) {
            overlay.className = 'item-overlay open';
            }
        })
    });
    
    const videoButtons = document.querySelectorAll('.video-view-button');

    videoButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const overlay = e.currentTarget.parentElement;
            const dateValue = e.currentTarget.previousSibling;

            if (dateValue.textContent <= localCurrentDate) {
                overlay.className = 'video-item-overlay open';
            const video = e.currentTarget.parentElement.parentElement.children[0];
            video.setAttribute("autoplay", "true");
            }
            
            
        }) 
    });

    