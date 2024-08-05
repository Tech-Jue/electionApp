// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('userInfo');

//     form.addEventListener('submit', (event) => {
//         event.preventDefault();
        
//         const firstName = document.getElementById('fName').value;
//         const middleName = document.getElementById('mName').value;
//         const lastName = document.getElementById('lName').value;
//         const email = document.getElementById('userEmail').value;
//         const password = document.getElementById('userPassword').value;
//         const userPhoto = document.getElementById('photo').value;
//         const dob = document.getAnimations('dob').value; 

//         if (firstName && middleName && lastName && email && password && userPhoto && dob ) {
//             const userData = {
//                 firstName: firstName,
//                 middleName: middleName,
//                 lastName: lastName,
//                 email: email,
//                 password: password,
//                 userPhoto: photo,
                
//             };

//             console.log('User Data:', userData);

//             // Send the data to your server via an API endpoint
//             fetch('/api/register', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(userData)
//             })
//             .then(response => response.json())
//             .then(data => {
//                 console.log('Success:', data);
//                 // Redirect the user or show a success message
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//                 // Handle errors
//             });
//         } else {
//             alert('Please fill in all fields.');
//         }
//     });
// });
