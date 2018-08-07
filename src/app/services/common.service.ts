import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

  constructor() { }

  replaceAdd(s: string) {
		s = s.replace(/hello/i, "bye");
		s += ' see you!!'
		return s;

}
