
<div id="main-section">
    <?= $contentBody ?>
</div>

<script>

    let domain = "<?php echo $domain; ?>"
    let id = "<?php echo $id; ?>"

    $('a').click(function(event){
        let nextUrl = "http://localhost/top?url=https://" + domain + $(this).attr('href') + "&domain=" + domain + "&id=" + id
        $(this).attr("href" , nextUrl)
    });
</script>