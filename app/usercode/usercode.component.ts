import { Component } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { stringify } from 'node:querystring';
@Component({
  selector: 'app-usercode',
  standalone: true,
  imports: [],
  templateUrl: './usercode.component.html',
  styleUrl: './usercode.component.css'
})
export class UsercodeComponent {
  public response:string="";
  async generatecode(code:HTMLTextAreaElement,source:HTMLInputElement,target:HTMLInputElement)
  {
    this.response="generating..."
    
    const genAI = new GoogleGenerativeAI("AIzaSyBjMifhvrRouIIQ9oaMxZ1cunAma9g5MPo");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "convert the following "+source.value+" code into "+target.value+" code,and dont provide any explanation,just provide me with output code.And dont put any heading/title,just plain code:"+code.value;

const result = await model.generateContent(prompt);
this.response=result.response.text();
this.response = result.response.text();
  }
}
