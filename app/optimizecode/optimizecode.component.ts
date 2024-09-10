import { Component } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
@Component({
  selector: 'app-optimizecode',
  standalone: true,
  imports: [],
  templateUrl: './optimizecode.component.html',
  styleUrl: './optimizecode.component.css'
})
export class OptimizecodeComponent {
  public result:string=" ";
  async optimizecode(a:HTMLTextAreaElement,b:HTMLInputElement)
  {
    this.result="generating..."
    const ai = new GoogleGenerativeAI('AIzaSyBjMifhvrRouIIQ9oaMxZ1cunAma9g5MPo')
    const mod = ai.getGenerativeModel({model:'gemini-1.5-flash'});
    let prompt = "Evaluate the following "+b.value+" understand what it is doing, and provide me with optimized code in the following format: first line consists of time complexity of my code and your code,second line consists of space complexity of my code and your code,third line contains percentage of optimization and your code starts from 4th line.Here is the program:"+a.value+"Your priority should be to optimize code in terms of time complexity,and then space complexity";
    prompt += "Here is an example: suppose you're given linear search code,It's optimization would be binary search.Basically you need to optimize the code such that the functionality of the code is executed quickly."
    const resp= await mod.generateContent(prompt);
    this.result= resp.response.text();
  }
}
