<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Text</title>
</head>
<body>
    <p id="status">Enter the Metaverse</p>
    <button id="enterBtn" onclick="changeText()">Enter</button>

    <script>
        function changeText() {
            document.getElementById("status").innerHTML = "<h1>Entered Metaverse</h1>";
        }
    </script>
</body>
</html>
