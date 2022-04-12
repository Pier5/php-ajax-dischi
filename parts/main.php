<main>
    <div class="container">
        <?php
        foreach ($arrAlbum as $info) { ?>
            <div class="card">
            <img class="main-card" src="<?= $info['poster'] ?>" alt="<?= $info['title'] ?>">
            <h2><?= $info['title'] ?></h2>
            <h3><?= $info['author'] ?></h3>
            <h4><?= $info['year'] ?></h4>
        </div>
        <?php
        } ?>
    </div>
</main>