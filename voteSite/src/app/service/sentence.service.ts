import { User } from './../class/user';
import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Sentence } from './../class/sentence';

@Injectable()
export class SentenceService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.apiUrl + '/sentence');
  }

  getBySentenceName(sentenceName: string) {
    return this.http.get(this.apiUrl + '/sentence/' + sentenceName);
  }

  create(sentence: Sentence) {
    return this.http.post(this.apiUrl + '/sentence', sentence);
  }

  update(sentence: Sentence) {
    return this.http.put(this.apiUrl + '/sentence/' + sentence.id, sentence);
  }

  delete(sentence: Sentence) {
    return this.http.delete(this.apiUrl + '/sentence/' + sentence.id);
  }

}
