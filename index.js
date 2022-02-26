console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
// we are fetching the images from random user generator API
const data = [
    {
        name: 'Lokesh',
        age: 18,
        city: 'Delhi',
        language: 'Javascript',
        framework: 'React',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Malik',
        age: 25,
        city: 'Bangalore',
        language: 'C++',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Abhishek Gupta',
        age: 28,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Pawan Rai',
        age: 35,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Mohit Sharma',
        age: 34,
        city: 'Uttarakhand',
        language: 'C',
        framework: 'Nextjs',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]


// CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            // ternary operator
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}

const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


// Whenever we press NEXT our next profile should come
function nextCV() {
    const currentCandidate = candidates.next().value;  // candidates have data of iterator currently
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else {
        alert('End of candidate applications');
        // when document ends refresh the page
        window.location.reload();
    }

}
