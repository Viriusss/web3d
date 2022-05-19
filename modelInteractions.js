//adapted from example code 'benskitchen.com'

var spinning = false;

function spin(id)
{
	spinning = !spinning;
	document.getElementById(id+'__RotationTimer').setAttribute('enabled', spinning.toString());
}

function stopRotation(id)
{
	spinning = false;
	document.getElementById(id+'__RotationTimer').setAttribute('enabled', spinning.toString());
}

function animateModel(id)
{
    if(document.getElementById(id+'__RotationTimer').getAttribute('enabled')!= 'true')
        document.getElementById(id+'__RotationTimer').setAttribute('enabled', 'true');
    else
        document.getElementById(id+'__RotationTimer').setAttribute('enabled', 'false');
}

function wireframe(id)
{
	var e = document.getElementById(id+'');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

var lightOn = true;

function headlight(id)
{
	lightOn = !lightOn;
	document.getElementById(id+'__headlight').setAttribute('headlight', lightOn.toString());
}

function cameraFront(id)
{
	document.getElementById(id+'__CameraFront').setAttribute('bind', 'true');
}

function cameraBack(id)
{
	document.getElementById(id+'__CameraBack').setAttribute('bind', 'true');
}

function cameraLeft(id)
{
	document.getElementById(id+'__CameraLeft').setAttribute('bind', 'true');
}

function cameraRight(id)
{
	document.getElementById(id+'__CameraRight').setAttribute('bind', 'true');
}

function cameraTop(id)
{
	document.getElementById(id+'__CameraTop').setAttribute('bind', 'true');
}

function cameraBottom(id)
{
	document.getElementById(id+'__CameraBottom').setAttribute('bind', 'true');
}