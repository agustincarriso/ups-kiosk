import { TriggerDoor } from "src/utils/triggerDoor"
import { Scene } from "../congif/core/scene"
import { SceneLocations } from "../congif/enums"
import { Kiosco } from "../utils/kiosk"
import { TriggerPrompts } from "../utils/triggerPrompts"


let x = 0

class ExteriorInstance extends Scene {

    //environment
    private mainGeo = new Entity()
    private bottomFloorVS = new Entity()
    private frontDoor = new Entity()
    private newStandGeo = new Entity()
    private newStandPosters = new Entity()
    private upsScreens = new Entity()
    private elevator = new Entity()
    private elevatorPanel = new Entity()
    private hologram = new Entity()
    private secondFloorPanels = new Entity()
    private secondFloorArticles = new Entity()
    private kiosk = new Entity()
    private k1 = new Kiosco()
    private boton = new TriggerPrompts()
    private triggerDoor1 = new TriggerDoor()

    public k1current = 1
    
    constructor() {
        super(SceneLocations.Exterior)
        this.addComponent(new GLTFShape('models/new models/UPS_Colliders.glb'))
        this.addComponentOrReplace(new Transform({
            position: new Vector3(0, 0, 0),
            scale: new Vector3(1, 1, 1),
            rotation: new Quaternion().setEuler(0.000, 0.000, 0.000),
        }))
        this.mainGeo.addComponent(new GLTFShape('models/new models/UPS_MainGeo.glb'))
        // this.bottomFloorVS.addComponent(new GLTFShape('models/UPS_bottom_floor_videoscreen_2.glb'))
        this.elevator.addComponent(new GLTFShape('models/new models/UPS_Elevator.glb'))
        this.elevator.addComponent(new Animator)
        this.elevator.getComponent(Animator).addClip(new AnimationState('ElevatorSatatic', { layer: 0, weight: 0.02 }))
        this.elevator.getComponent(Animator).addClip(new AnimationState('ElevatorLift', { layer: 1, weight: 0.01 }))
        this.elevator.getComponent(Animator).getClip('ElevatorStatic').pause()

        this.elevatorPanel.addComponent(new GLTFShape('models/new models/UPS_Elevator_panelnew.glb'))
        this.elevatorPanel.addComponent(new Animator)
        this.elevatorPanel.getComponent(Animator).addClip(new AnimationState('PanelOff', { layer: 0, weight: 0.02 }))
        this.elevatorPanel.getComponent(Animator).addClip(new AnimationState('PanelFadeIn', { layer: 1, weight: 0.01 }))
        this.elevatorPanel.getComponent(Animator).addClip(new AnimationState('PanelOn', { layer: 2, weight: 0.01 }))
        this.elevatorPanel.getComponent(Animator).getClip('PanelOff').pause()
        this.kiosk.addComponent(new GLTFShape('models/buttons/UPS_Kiosko_1.glb'))
        this.kiosk.addComponentOrReplace(new Transform({
            position: new Vector3(10.860, 1.980, 13.950),
            scale: new Vector3(1.600, 1.600, 1.600),
            rotation: new Quaternion().setEuler(360.000, 180.000, 360.000),
        }))

        this.frontDoor.addComponent(new GLTFShape('models/UPS_FrontDoor.glb'))
        this.frontDoor.addComponent(new Animator)
        this.frontDoor.getComponent(Animator).addClip(new AnimationState('GlassDoor_Open', { layer: 0, weight: 0.01 }))
        this.frontDoor.getComponent(Animator).addClip(new AnimationState('GlassDoor_Close', { layer: 1, weight: 0.01 }))
        this.newStandPosters.addComponent(new GLTFShape('models/UPS_Newstand_posters.glb'))
        this.newStandGeo.addComponent(new GLTFShape('models/UPS_Newstand_geo1.glb'))
        this.hologram.addComponent(new GLTFShape('models/new models/UPS_Hologram.glb'))
        this.upsScreens.addComponent(new GLTFShape('models/new models/UPS_Screens.glb'))
        this.secondFloorPanels.addComponent(new GLTFShape('models/new models/UPS_2ndFL_ContentPanels.glb'))
        this.secondFloorArticles.addComponent(new GLTFShape('models/new models/UPS_Floor2_Articles.glb'))
        this.boton.addComponentOrReplace(new Transform({
            position: new Vector3(18.060, 2.080, 11.150),
            scale: new Vector3(0.550, 0.233, 5.213),
            rotation: new Quaternion().setEuler(360.000, 180.000, 180.000),
        }))
        this.boton.setMessage("Amazon gift card")
        // this.boton.addComponent(Dash_Material.transparent())
        this.boton.onClick = () => {
            //openExternalURL("http://beunstoppablestoreoffers.com/")
        }

        this.mainGeo.setParent(this)
        this.elevator.setParent(this)
        this.elevatorPanel.setParent(this)
        this.bottomFloorVS.setParent(this)
        this.frontDoor.setParent(this)
        this.newStandGeo.setParent(this)
        this.hologram.setParent(this)
        this.upsScreens.setParent(this)
        this.secondFloorPanels.setParent(this)
        this.secondFloorArticles.setParent(this)
        this.kiosk.setParent(this)

        // this.newStandPosters.setParent(this)

        // this.article5.setParent(this)
        // this.article6.setParent(this)
        // this.article7.setParent(this)

        // this.teleportCollider.addComponent(new BoxShape)
        // this.teleportCollider.addComponent(new Transform({
        //     position: new Vector3(4.170, 2.020, 27.980),
        //     scale: new Vector3(5.000, 5.000, 3.000),
        //     rotation: new Quaternion().setEuler(0.000, 0.000, 0.000),
        // }))
        // this.teleportCollider.addComponent(Dash_Material.transparent())
        this.createKiosco()
        this.triggerPortal1()
    }
    triggerPortal1() {
        [this.triggerDoor1,
        ].forEach(TriggerDoor => {
            TriggerDoor.setParent(this)
            // TriggerDoor.addComponent(Dash_Material.transparent())
            TriggerDoor.getComponent(BoxShape).withCollisions = false
            TriggerDoor.removeComponent(BoxShape)
        })


        this.triggerDoor1.addComponentOrReplace(new Transform({
            position: new Vector3(14.410, 0.980, 10.160),
            scale: new Vector3(6.800, 5.000, 12.000),
            rotation: new Quaternion().setEuler(1.000, 180.000, 1.000),
        }))
        this.triggerDoor1.onCameraEnter = () => this.enter()
        this.triggerDoor1.onCameraExit = () => this.exit()
    }
    enter() {
        //Door animation plays
        this.frontDoor.getComponent(Animator).getClip('GlassDoor_Close').stop()
        this.frontDoor.getComponent(Animator).getClip('GlassDoor_Open').play()
        this.frontDoor.getComponent(Animator).getClip('GlassDoor_Open').looping = false

    }
    exit() {
        //this.frontDoor.getComponent(Animator).getClip('GlassDoor_Close').stop()
        this.frontDoor.getComponent(Animator).getClip('GlassDoor_Open').stop()
        this.frontDoor.getComponent(Animator).getClip('GlassDoor_Close').play()
        this.frontDoor.getComponent(Animator).getClip('GlassDoor_Close').looping = false
    }
    createKiosco() {
        this.k1.setParent(this)
        this.k1.addComponentOrReplace(new PlaneShape())
        this.k1.addComponentOrReplace(new Transform({
            position: new Vector3(11.130, 2.080, 13.950),
            scale: new Vector3(1.150, 2.233, 8.213),
            rotation: new Quaternion().setEuler(360.000, 270.000, 180.000),
        }))
        this.k1.addComponentOrReplace(new OnPointerDown(() => {
            if (this.k1current == 1) {

                this.k1.myMaterial.albedoTexture = this.k1.cover1
                this.k1current = 2
                return
            }

            if (this.k1current == 2) {
                this.k1.myMaterial.albedoTexture = this.k1.cover2
                engine.addEntity(this.boton)
                this.k1current = 3
                return
            }
            if (this.k1current == 3) {
                engine.removeEntity(this.boton)
                this.k1.myMaterial.albedoTexture = this.k1.cover
                this.k1current = 1
                return
            }

        }, {
            hoverText: 'Interact'
        }))
        //engine.addEntity(this.k1)

    }


}



export const Exterior = new ExteriorInstance()