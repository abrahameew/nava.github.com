var wms_layers = [];

var lyr_Capadesalida_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Capa de salida",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Capadesalida_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11220951.796000, 3299242.742900, -11213783.796000, 3305386.742900]
                            })
                        });
var format_punto_1 = new ol.format.GeoJSON();
var features_punto_1 = format_punto_1.readFeatures(json_punto_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_punto_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_punto_1.addFeatures(features_punto_1);
var lyr_punto_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_punto_1, 
                style: style_punto_1,
                interactive: true,
                title: '<img src="styles/legend/punto_1.png" /> punto'
            });
var format_multipunto_2 = new ol.format.GeoJSON();
var features_multipunto_2 = format_multipunto_2.readFeatures(json_multipunto_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_multipunto_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_multipunto_2.addFeatures(features_multipunto_2);
var lyr_multipunto_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_multipunto_2, 
                style: style_multipunto_2,
                interactive: true,
                title: '<img src="styles/legend/multipunto_2.png" /> multipunto'
            });
var format_linea_3 = new ol.format.GeoJSON();
var features_linea_3 = format_linea_3.readFeatures(json_linea_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linea_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linea_3.addFeatures(features_linea_3);
var lyr_linea_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_linea_3, 
                style: style_linea_3,
                interactive: true,
                title: '<img src="styles/legend/linea_3.png" /> linea'
            });
var format_linea3_4 = new ol.format.GeoJSON();
var features_linea3_4 = format_linea3_4.readFeatures(json_linea3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linea3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linea3_4.addFeatures(features_linea3_4);
var lyr_linea3_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_linea3_4, 
                style: style_linea3_4,
                interactive: true,
                title: '<img src="styles/legend/linea3_4.png" /> linea3'
            });
var format_linea4_5 = new ol.format.GeoJSON();
var features_linea4_5 = format_linea4_5.readFeatures(json_linea4_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linea4_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linea4_5.addFeatures(features_linea4_5);
var lyr_linea4_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_linea4_5, 
                style: style_linea4_5,
                interactive: true,
                title: '<img src="styles/legend/linea4_5.png" /> linea4'
            });

lyr_Capadesalida_0.setVisible(true);lyr_punto_1.setVisible(true);lyr_multipunto_2.setVisible(true);lyr_linea_3.setVisible(true);lyr_linea3_4.setVisible(true);lyr_linea4_5.setVisible(true);
var layersList = [lyr_Capadesalida_0,lyr_punto_1,lyr_multipunto_2,lyr_linea_3,lyr_linea3_4,lyr_linea4_5];
lyr_punto_1.set('fieldAliases', {'id': 'id', });
lyr_multipunto_2.set('fieldAliases', {'id': 'id', });
lyr_linea_3.set('fieldAliases', {'id': 'id', });
lyr_linea3_4.set('fieldAliases', {'id': 'id', });
lyr_linea4_5.set('fieldAliases', {'id': 'id', });
lyr_punto_1.set('fieldImages', {'id': 'TextEdit', });
lyr_multipunto_2.set('fieldImages', {'id': 'TextEdit', });
lyr_linea_3.set('fieldImages', {'id': 'TextEdit', });
lyr_linea3_4.set('fieldImages', {'id': 'TextEdit', });
lyr_linea4_5.set('fieldImages', {'id': 'TextEdit', });
lyr_punto_1.set('fieldLabels', {'id': 'no label', });
lyr_multipunto_2.set('fieldLabels', {'id': 'no label', });
lyr_linea_3.set('fieldLabels', {'id': 'no label', });
lyr_linea3_4.set('fieldLabels', {'id': 'no label', });
lyr_linea4_5.set('fieldLabels', {'id': 'no label', });
lyr_linea4_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});