let hero: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Render.setViewMode(ViewMode.raycastingView)
controller.moveSprite(hero)
hero = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . e e e e . . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . . d 1 d d 1 d . . . . . . 
    . . . . d f d d f d . . . . . . 
    . . . . d d d d d d . . . . . . 
    . . . a a a a a a a a . . . . . 
    . . . a a c c c c a a . . . . . 
    . . . a a c c c c a a . . . . . 
    . . . d d c c c c d d . . . . . 
    . . . d d c c c c d d . . . . . 
    . . . . . 6 6 6 6 . . . . . . . 
    . . . . . 6 . . 6 . . . . . . . 
    . . . . . 6 . . 6 . . . . . . . 
    `, SpriteKind.Player)
hero.setPosition(5, 17)
