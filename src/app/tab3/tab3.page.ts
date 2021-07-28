import { Component} from '@angular/core';
import { MotionService } from '../services/motion.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  x: number;
  y: number;
  z: number;
  constructor(public servmotion: MotionService) {}
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
  }

  public async datosvelocidad(){
  this.getmotion();
  }

  getmotion()
  {
     this.servmotion.Cordenadasdevelocidad().then(()=>{
      this.x=this.servmotion.x;
      this.y=this.servmotion.y;
      this.z=this.servmotion.z;
    });
  }
}
