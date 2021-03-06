//
//  Created by Szymon Krawczyk 2019
//

class snow_golem {

constructor () {

	this.scale 			= 0.1;
	this.Model;
	this.loaded 		= false;

	this.Group = new THREE.Group();

}


loadObject() {

	let loader = new THREE.GLTFLoader();
	let tempModel;
	let tempLoaded;
	let tempScale = this.scale;
	loader.load( `objects/mc/snow_golem/snow_golem.glb`, function ( gltf ) {

	    tempModel = gltf.scene.children[0];
	    tempModel.name = 'snow_golem_Body';
	    tempModel.scale.set (tempScale, tempScale, tempScale);
	    tempModel.position.set ( 0, 0.6, 0 );
	    tempModel.castShadow = true;
		tempLoaded = true;
		
		gltf.scene.traverse( function( node ) { // Make the whole object react with shadows

        	if ( node instanceof THREE.Mesh ) { node.castShadow = true; node.receiveShadow = false; }

    	} );

		tempSet();

	}, undefined, function ( error ) {

		console.error( error );

	} );

	const tempSet = () => {
		this.loaded = tempLoaded;
		this.Model = tempModel;
		this.Group.add(this.Model);
	}
	
}

addToScene() {

	scene.add(this.Group);
}

};