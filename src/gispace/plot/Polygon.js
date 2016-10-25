
P.Plot.Polygon = function(points,params){
    goog.base(this, []);
    this.type = P.PlotTypes.POLYGON;
    this.setPoints(points);
    this.set("params",params);
};

goog.inherits(P.Plot.Polygon, ol.geom.Polygon);
goog.mixin(P.Plot.Polygon.prototype, P.Plot.prototype);

P.Plot.Polygon.prototype.generate = function() {
    this.setCoordinates([this.points]);
};