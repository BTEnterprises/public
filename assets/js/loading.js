const htmlContent = `
<!DOCTYPE html>
<html lang='en'>
<head>
    <title> Loader example </title>
    <link rel="stylesheet" href="assets/css/loading.css" />
</head>
<body>
    <!--- Your content goes here -->
    <p>Page content</p>
    <div class='pre-loader'>
        <img class='loading-gif' alt='loading' src="https://media0.giphy.com/media/11FuEnXyGsXFba/source.gif"/>
    </div>
    <script type='text/javascript'>
        window.addEventListener('load', function () {
            document.querySelector('.pre-loader').className += ' hidden';
        });
    </script>
</body>
</html>
`;
// Append the HTML structure to the document


document.write(htmlContent);