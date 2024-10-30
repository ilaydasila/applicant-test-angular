import { Injectable } from '@angular/core';
import { Data, State } from '../models/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: Data[]  = [
    {
        section: "Scale",
        state: State.Running
    },
    {
        section: "Bag Attach",
        state: State.Alarm
    },
    {
        section: "Packer",
        state: State.Running
    }, 
    {
        section: "Bag Closer",
        state: State.Warning
    }
  ]

  public getdata(): Data[] {
    return this.data.map(d => {
      if(d.section === 'Bag Attach') {
        d.section = 'Attacher';
      }
      else if(d.section === 'Bag Closer') {
        d.section = 'Closer';
      }
      return d;
    })
  }

  public getStateClass(state: string): string {
    switch(state) {
      case 'settings_backup_restore':
        return 'running'
      case 'error_outline':
        return 'error';
      case 'report_problem':
        return 'warning';
      default:
      return ''
    }
  }
}
