import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.scss']
})
export class PostdetailsComponent implements OnInit {
	private post: Object;
	private postId: Object;

  	constructor(private data: DataService, private route: ActivatedRoute) { 
		this.route.params.subscribe( params => this.postId = params.id );
	}

	ngOnInit() {
		this.data.getPost(this.postId).subscribe(
			data => this.post = data
		);
	}

}
