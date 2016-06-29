<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Product Manager</title>
    <base href="/admin/product/">

</head>
<body>


<div class="container layer">

    <app-root>Loading...</app-root>

</div>



<script src="vendor/es6-shim/es6-shim.js"></script>
<script src="vendor/reflect-metadata/Reflect.js"></script>
<script src="vendor/systemjs/dist/system.src.js"></script>
<script src="vendor/zone.js/dist/zone.js"></script>
<script>
    System.import('system-config.js').then(function () {
        System.import('main');
    }).catch(console.error.bind(console));
</script>

</body>
</html>
