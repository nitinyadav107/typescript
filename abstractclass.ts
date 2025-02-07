abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string) {
  }
  abstract getSepia(): void
}
//const insta= new TakePhoto("test", "test") //not allowed to create object of abstract class
class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number) {
    super(cameraMode, filter)
  }
  getSepia(): void {
    console.log("sepia")
  }

}
const InstagramInst = new Instagram("test", "test", 13)