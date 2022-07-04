// forgot to add target='_blank' so this was a faster way
$(document.links).filter(function () { return this.hostname != window.location.hostname; }).attr('target', '_blank');