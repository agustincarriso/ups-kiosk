export class Kiosco extends Entity {

    public cover = new Texture('images/kiosk/UPS UI 1 Reference.png')
    public cover1 = new Texture('images/kiosk/UPS UI 2 Reference.png')
    public cover2 = new Texture('images/kiosk/UPS UI 3 Reference.png')
    
    public myMaterial = new Material()


    constructor() {
        super()

        this.myMaterial.albedoTexture = this.cover
        this.addComponent(new PlaneShape())
        this.addComponent(new Transform())
        this.addComponent(this.myMaterial)
    }

}
