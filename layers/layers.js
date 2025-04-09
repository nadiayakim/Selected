var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Russian_occupation_1 = new ol.format.GeoJSON();
var features_Russian_occupation_1 = format_Russian_occupation_1.readFeatures(json_Russian_occupation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Russian_occupation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Russian_occupation_1.addFeatures(features_Russian_occupation_1);
var lyr_Russian_occupation_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Russian_occupation_1, 
                style: style_Russian_occupation_1,
                interactive: true,
                title: '<img src="styles/legend/Russian_occupation_1.png" /> Russian_occupation'
            });
var format_Ukraine_recaptured_2 = new ol.format.GeoJSON();
var features_Ukraine_recaptured_2 = format_Ukraine_recaptured_2.readFeatures(json_Ukraine_recaptured_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ukraine_recaptured_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ukraine_recaptured_2.addFeatures(features_Ukraine_recaptured_2);
var lyr_Ukraine_recaptured_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ukraine_recaptured_2, 
                style: style_Ukraine_recaptured_2,
                interactive: true,
                title: '<img src="styles/legend/Ukraine_recaptured_2.png" /> Ukraine_recaptured'
            });
var format_Oblasts_3 = new ol.format.GeoJSON();
var features_Oblasts_3 = format_Oblasts_3.readFeatures(json_Oblasts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Oblasts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oblasts_3.addFeatures(features_Oblasts_3);
var lyr_Oblasts_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Oblasts_3, 
                style: style_Oblasts_3,
                interactive: true,
                title: '<img src="styles/legend/Oblasts_3.png" /> Oblasts'
            });
var format_Selected_hromadas_4 = new ol.format.GeoJSON();
var features_Selected_hromadas_4 = format_Selected_hromadas_4.readFeatures(json_Selected_hromadas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Selected_hromadas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Selected_hromadas_4.addFeatures(features_Selected_hromadas_4);
var lyr_Selected_hromadas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Selected_hromadas_4, 
                style: style_Selected_hromadas_4,
                interactive: true,
    title: 'Selected_hromadas<br />\
    <img src="styles/legend/Selected_hromadas_4_0.png" /> rural<br />\
    <img src="styles/legend/Selected_hromadas_4_1.png" /> semi-urban<br />\
    <img src="styles/legend/Selected_hromadas_4_2.png" /> urban<br />'
        });
var format_Settlements_5 = new ol.format.GeoJSON();
var features_Settlements_5 = format_Settlements_5.readFeatures(json_Settlements_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Settlements_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Settlements_5.addFeatures(features_Settlements_5);
var lyr_Settlements_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Settlements_5, 
                style: style_Settlements_5,
                interactive: true,
                title: '<img src="styles/legend/Settlements_5.png" /> Settlements'
            });
var format_Nationalroads_6 = new ol.format.GeoJSON();
var features_Nationalroads_6 = format_Nationalroads_6.readFeatures(json_Nationalroads_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nationalroads_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nationalroads_6.addFeatures(features_Nationalroads_6);
var lyr_Nationalroads_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nationalroads_6, 
                style: style_Nationalroads_6,
                interactive: true,
                title: '<img src="styles/legend/Nationalroads_6.png" /> National roads'
            });
var format_Population2023_7 = new ol.format.GeoJSON();
var features_Population2023_7 = format_Population2023_7.readFeatures(json_Population2023_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Population2023_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Population2023_7.addFeatures(features_Population2023_7);
var lyr_Population2023_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Population2023_7, 
                style: style_Population2023_7,
                interactive: true,
    title: 'Population 2023<br />\
    <img src="styles/legend/Population2023_7_0.png" /> 3112 - 4544<br />\
    <img src="styles/legend/Population2023_7_1.png" /> 4544 - 6019<br />\
    <img src="styles/legend/Population2023_7_2.png" /> 6019 - 12785<br />\
    <img src="styles/legend/Population2023_7_3.png" /> 12785 - 18949<br />\
    <img src="styles/legend/Population2023_7_4.png" /> 18949 - 27427<br />'
        });
var format_Numberofsettlementsinhromada_8 = new ol.format.GeoJSON();
var features_Numberofsettlementsinhromada_8 = format_Numberofsettlementsinhromada_8.readFeatures(json_Numberofsettlementsinhromada_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Numberofsettlementsinhromada_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Numberofsettlementsinhromada_8.addFeatures(features_Numberofsettlementsinhromada_8);
var lyr_Numberofsettlementsinhromada_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Numberofsettlementsinhromada_8, 
                style: style_Numberofsettlementsinhromada_8,
                interactive: true,
                title: '<img src="styles/legend/Numberofsettlementsinhromada_8.png" /> Number of settlements in hromada'
            });
var format_Namesofhromadas_9 = new ol.format.GeoJSON();
var features_Namesofhromadas_9 = format_Namesofhromadas_9.readFeatures(json_Namesofhromadas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Namesofhromadas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Namesofhromadas_9.addFeatures(features_Namesofhromadas_9);
var lyr_Namesofhromadas_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Namesofhromadas_9, 
                style: style_Namesofhromadas_9,
                interactive: true,
                title: '<img src="styles/legend/Namesofhromadas_9.png" /> Names of hromadas'
            });

lyr_ESRIGraylight_0.setVisible(true);lyr_Russian_occupation_1.setVisible(true);lyr_Ukraine_recaptured_2.setVisible(true);lyr_Oblasts_3.setVisible(true);lyr_Selected_hromadas_4.setVisible(true);lyr_Settlements_5.setVisible(true);lyr_Nationalroads_6.setVisible(true);lyr_Population2023_7.setVisible(false);lyr_Numberofsettlementsinhromada_8.setVisible(true);lyr_Namesofhromadas_9.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_Russian_occupation_1,lyr_Ukraine_recaptured_2,lyr_Oblasts_3,lyr_Selected_hromadas_4,lyr_Settlements_5,lyr_Nationalroads_6,lyr_Population2023_7,lyr_Numberofsettlementsinhromada_8,lyr_Namesofhromadas_9];
lyr_Russian_occupation_1.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Ukraine_recaptured_2.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Oblasts_3.set('fieldAliases', {'ADM1_EN': 'ADM1_EN', 'ADM1_UA': 'ADM1_UA', 'ADM1_RU': 'ADM1_RU', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_UA': 'ADM0_UA', 'ADM0_RU': 'ADM0_RU', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'AREA_SQKM': 'AREA_SQKM', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Selected_hromadas_4.set('fieldAliases', {'ADM3_EN': 'ADM3_EN', 'ADM3_UA': 'ADM3_UA', 'ADM3_RU': 'ADM3_RU', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_UA': 'ADM2_UA', 'ADM2_RU': 'ADM2_RU', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_UA': 'ADM1_UA', 'ADM1_RU': 'ADM1_RU', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_UA': 'ADM0_UA', 'ADM0_RU': 'ADM0_RU', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'AREA_SQKM': 'AREA_SQKM', 'Shape_Leng': 'Shape_Leng', 'Admin3_UAn': 'Admin3_UAn', 'Admin3_ENn': 'Admin3_ENn', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'FID_': 'FID_', 'ADM3_EN_1': 'ADM3_EN_1', 'ADM3_UA_1': 'ADM3_UA_1', 'ADM3_PCO_1': 'ADM3_PCO_1', 'ADM2_EN_1': 'ADM2_EN_1', 'ADM2_UA_1': 'ADM2_UA_1', 'ADM2_PCO_1': 'ADM2_PCO_1', 'ADM1_EN_1': 'ADM1_EN_1', 'AREA_SQK_1': 'AREA_SQK_1', 'Admin3_U_1': 'Admin3_U_1', 'Admin3_E_1': 'Admin3_E_1', 'L1_share': 'L1_share', 'L2_share': 'L2_share', 'L3A_share': 'L3A_share', 'L3B_share': 'L3B_share', 'L3C_share': 'L3C_share', 'Occp_share': 'Occp_share', 'ACLED_3y': 'ACLED_3y', 'ACLED_3m': 'ACLED_3m', 'ACLED_3y_D': 'ACLED_3y_D', 'ACLED_3m_D': 'ACLED_3m_D', 'Deoccupied': 'Deoccupied', 'ADM3_type': 'ADM3_type', 'UKRSTAT_22': 'UKRSTAT_22', 'OXFORD_23': 'OXFORD_23', 'MidWntr_24': 'MidWntr_24', 'Haven_II': 'Haven_II', 'Polaris': 'Polaris', 'Recovery_P': 'Recovery_P', 'Strategy': 'Strategy', 'Expressed_': 'Expressed_', 'ObjectID': 'ObjectID', 'Settlem': 'Settlem', });
lyr_Settlements_5.set('fieldAliases', {'ADM4_EN': 'ADM4_EN', 'ADM4_UA': 'ADM4_UA', 'ADM4_RU': 'ADM4_RU', 'ADM4_PCODE': 'ADM4_PCODE', 'ADM3_EN': 'ADM3_EN', 'ADM3_UA': 'ADM3_UA', 'ADM3_RU': 'ADM3_RU', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_UA': 'ADM2_UA', 'ADM2_RU': 'ADM2_RU', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_UA': 'ADM1_UA', 'ADM1_RU': 'ADM1_RU', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_UA': 'ADM0_UA', 'ADM0_RU': 'ADM0_RU', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'AREA_SQKM': 'AREA_SQKM', 'Shape_Leng': 'Shape_Leng', 'Admin4_UAn': 'Admin4_UAn', 'Admin4_ENn': 'Admin4_ENn', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Nationalroads_6.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', 'length': 'length', 'Shape_Leng': 'Shape_Leng', });
lyr_Population2023_7.set('fieldAliases', {'ADM3_EN': 'ADM3_EN', 'ADM3_UA': 'ADM3_UA', 'ADM3_RU': 'ADM3_RU', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_UA': 'ADM2_UA', 'ADM2_RU': 'ADM2_RU', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_UA': 'ADM1_UA', 'ADM1_RU': 'ADM1_RU', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_UA': 'ADM0_UA', 'ADM0_RU': 'ADM0_RU', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'AREA_SQKM': 'AREA_SQKM', 'Shape_Leng': 'Shape_Leng', 'Admin3_UAn': 'Admin3_UAn', 'Admin3_ENn': 'Admin3_ENn', 'Shape_Le_1': 'Shape_Le_1', 'FID_': 'FID_', 'ADM3_EN_1': 'ADM3_EN_1', 'ADM3_UA_1': 'ADM3_UA_1', 'ADM3_PCO_1': 'ADM3_PCO_1', 'ADM2_EN_1': 'ADM2_EN_1', 'ADM2_UA_1': 'ADM2_UA_1', 'ADM2_PCO_1': 'ADM2_PCO_1', 'ADM1_EN_1': 'ADM1_EN_1', 'AREA_SQK_1': 'AREA_SQK_1', 'Admin3_U_1': 'Admin3_U_1', 'Admin3_E_1': 'Admin3_E_1', 'L1_share': 'L1_share', 'L2_share': 'L2_share', 'L3A_share': 'L3A_share', 'L3B_share': 'L3B_share', 'L3C_share': 'L3C_share', 'Occp_share': 'Occp_share', 'ACLED_3y': 'ACLED_3y', 'ACLED_3m': 'ACLED_3m', 'ACLED_3y_D': 'ACLED_3y_D', 'ACLED_3m_D': 'ACLED_3m_D', 'Deoccupied': 'Deoccupied', 'ADM3_type': 'ADM3_type', 'UKRSTAT_22': 'UKRSTAT_22', 'OXFORD_23': 'OXFORD_23', 'MidWntr_24': 'MidWntr_24', 'Haven_II': 'Haven_II', 'Polaris': 'Polaris', 'Recovery_P': 'Recovery_P', 'Strategy': 'Strategy', 'Expressed_': 'Expressed_', 'ObjectID': 'ObjectID', 'ORIG_FID': 'ORIG_FID', });
lyr_Numberofsettlementsinhromada_8.set('fieldAliases', {'ADM3_EN': 'ADM3_EN', 'ADM3_UA': 'ADM3_UA', 'ADM3_RU': 'ADM3_RU', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_UA': 'ADM2_UA', 'ADM2_RU': 'ADM2_RU', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_UA': 'ADM1_UA', 'ADM1_RU': 'ADM1_RU', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_UA': 'ADM0_UA', 'ADM0_RU': 'ADM0_RU', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'AREA_SQKM': 'AREA_SQKM', 'Shape_Leng': 'Shape_Leng', 'Admin3_UAn': 'Admin3_UAn', 'Admin3_ENn': 'Admin3_ENn', 'Shape_Le_1': 'Shape_Le_1', 'FID_': 'FID_', 'ADM3_EN_1': 'ADM3_EN_1', 'ADM3_UA_1': 'ADM3_UA_1', 'ADM3_PCO_1': 'ADM3_PCO_1', 'ADM2_EN_1': 'ADM2_EN_1', 'ADM2_UA_1': 'ADM2_UA_1', 'ADM2_PCO_1': 'ADM2_PCO_1', 'ADM1_EN_1': 'ADM1_EN_1', 'AREA_SQK_1': 'AREA_SQK_1', 'Admin3_U_1': 'Admin3_U_1', 'Admin3_E_1': 'Admin3_E_1', 'L1_share': 'L1_share', 'L2_share': 'L2_share', 'L3A_share': 'L3A_share', 'L3B_share': 'L3B_share', 'L3C_share': 'L3C_share', 'Occp_share': 'Occp_share', 'ACLED_3y': 'ACLED_3y', 'ACLED_3m': 'ACLED_3m', 'ACLED_3y_D': 'ACLED_3y_D', 'ACLED_3m_D': 'ACLED_3m_D', 'Deoccupied': 'Deoccupied', 'ADM3_type': 'ADM3_type', 'UKRSTAT_22': 'UKRSTAT_22', 'OXFORD_23': 'OXFORD_23', 'MidWntr_24': 'MidWntr_24', 'Haven_II': 'Haven_II', 'Polaris': 'Polaris', 'Recovery_P': 'Recovery_P', 'Strategy': 'Strategy', 'Expressed_': 'Expressed_', 'ObjectID': 'ObjectID', 'Settlem': 'Settlem', 'ORIG_FID': 'ORIG_FID', });
lyr_Namesofhromadas_9.set('fieldAliases', {'ADM3_EN': 'ADM3_EN', 'ADM3_UA': 'ADM3_UA', 'ADM3_RU': 'ADM3_RU', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM2_EN': 'ADM2_EN', 'ADM2_UA': 'ADM2_UA', 'ADM2_RU': 'ADM2_RU', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_UA': 'ADM1_UA', 'ADM1_RU': 'ADM1_RU', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_UA': 'ADM0_UA', 'ADM0_RU': 'ADM0_RU', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'AREA_SQKM': 'AREA_SQKM', 'Shape_Leng': 'Shape_Leng', 'Admin3_UAn': 'Admin3_UAn', 'Admin3_ENn': 'Admin3_ENn', 'Shape_Le_1': 'Shape_Le_1', 'FID_': 'FID_', 'ADM3_EN_1': 'ADM3_EN_1', 'ADM3_UA_1': 'ADM3_UA_1', 'ADM3_PCO_1': 'ADM3_PCO_1', 'ADM2_EN_1': 'ADM2_EN_1', 'ADM2_UA_1': 'ADM2_UA_1', 'ADM2_PCO_1': 'ADM2_PCO_1', 'ADM1_EN_1': 'ADM1_EN_1', 'AREA_SQK_1': 'AREA_SQK_1', 'Admin3_U_1': 'Admin3_U_1', 'Admin3_E_1': 'Admin3_E_1', 'L1_share': 'L1_share', 'L2_share': 'L2_share', 'L3A_share': 'L3A_share', 'L3B_share': 'L3B_share', 'L3C_share': 'L3C_share', 'Occp_share': 'Occp_share', 'ACLED_3y': 'ACLED_3y', 'ACLED_3m': 'ACLED_3m', 'ACLED_3y_D': 'ACLED_3y_D', 'ACLED_3m_D': 'ACLED_3m_D', 'Deoccupied': 'Deoccupied', 'ADM3_type': 'ADM3_type', 'UKRSTAT_22': 'UKRSTAT_22', 'OXFORD_23': 'OXFORD_23', 'MidWntr_24': 'MidWntr_24', 'Haven_II': 'Haven_II', 'Polaris': 'Polaris', 'Recovery_P': 'Recovery_P', 'Strategy': 'Strategy', 'Expressed_': 'Expressed_', 'ObjectID': 'ObjectID', 'ORIG_FID': 'ORIG_FID', });
lyr_Russian_occupation_1.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Ukraine_recaptured_2.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Oblasts_3.set('fieldImages', {'ADM1_EN': 'TextEdit', 'ADM1_UA': 'TextEdit', 'ADM1_RU': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_UA': 'TextEdit', 'ADM0_RU': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'AREA_SQKM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Selected_hromadas_4.set('fieldImages', {'ADM3_EN': 'TextEdit', 'ADM3_UA': 'TextEdit', 'ADM3_RU': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_UA': 'TextEdit', 'ADM2_RU': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_UA': 'TextEdit', 'ADM1_RU': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_UA': 'TextEdit', 'ADM0_RU': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'AREA_SQKM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Admin3_UAn': 'TextEdit', 'Admin3_ENn': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'FID_': 'TextEdit', 'ADM3_EN_1': 'TextEdit', 'ADM3_UA_1': 'TextEdit', 'ADM3_PCO_1': 'TextEdit', 'ADM2_EN_1': 'TextEdit', 'ADM2_UA_1': 'TextEdit', 'ADM2_PCO_1': 'TextEdit', 'ADM1_EN_1': 'TextEdit', 'AREA_SQK_1': 'TextEdit', 'Admin3_U_1': 'TextEdit', 'Admin3_E_1': 'TextEdit', 'L1_share': 'TextEdit', 'L2_share': 'TextEdit', 'L3A_share': 'TextEdit', 'L3B_share': 'TextEdit', 'L3C_share': 'TextEdit', 'Occp_share': 'TextEdit', 'ACLED_3y': 'TextEdit', 'ACLED_3m': 'TextEdit', 'ACLED_3y_D': 'TextEdit', 'ACLED_3m_D': 'TextEdit', 'Deoccupied': 'TextEdit', 'ADM3_type': 'TextEdit', 'UKRSTAT_22': 'TextEdit', 'OXFORD_23': 'TextEdit', 'MidWntr_24': 'TextEdit', 'Haven_II': 'TextEdit', 'Polaris': 'TextEdit', 'Recovery_P': 'TextEdit', 'Strategy': 'TextEdit', 'Expressed_': 'TextEdit', 'ObjectID': 'Range', 'Settlem': 'TextEdit', });
lyr_Settlements_5.set('fieldImages', {'ADM4_EN': 'TextEdit', 'ADM4_UA': 'TextEdit', 'ADM4_RU': 'TextEdit', 'ADM4_PCODE': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_UA': 'TextEdit', 'ADM3_RU': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_UA': 'TextEdit', 'ADM2_RU': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_UA': 'TextEdit', 'ADM1_RU': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_UA': 'TextEdit', 'ADM0_RU': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'AREA_SQKM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Admin4_UAn': 'TextEdit', 'Admin4_ENn': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Nationalroads_6.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'length': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Population2023_7.set('fieldImages', {'ADM3_EN': 'TextEdit', 'ADM3_UA': 'TextEdit', 'ADM3_RU': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_UA': 'TextEdit', 'ADM2_RU': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_UA': 'TextEdit', 'ADM1_RU': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_UA': 'TextEdit', 'ADM0_RU': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'AREA_SQKM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Admin3_UAn': 'TextEdit', 'Admin3_ENn': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'FID_': 'TextEdit', 'ADM3_EN_1': 'TextEdit', 'ADM3_UA_1': 'TextEdit', 'ADM3_PCO_1': 'TextEdit', 'ADM2_EN_1': 'TextEdit', 'ADM2_UA_1': 'TextEdit', 'ADM2_PCO_1': 'TextEdit', 'ADM1_EN_1': 'TextEdit', 'AREA_SQK_1': 'TextEdit', 'Admin3_U_1': 'TextEdit', 'Admin3_E_1': 'TextEdit', 'L1_share': 'TextEdit', 'L2_share': 'TextEdit', 'L3A_share': 'TextEdit', 'L3B_share': 'TextEdit', 'L3C_share': 'TextEdit', 'Occp_share': 'TextEdit', 'ACLED_3y': 'TextEdit', 'ACLED_3m': 'TextEdit', 'ACLED_3y_D': 'TextEdit', 'ACLED_3m_D': 'TextEdit', 'Deoccupied': 'TextEdit', 'ADM3_type': 'TextEdit', 'UKRSTAT_22': 'TextEdit', 'OXFORD_23': 'TextEdit', 'MidWntr_24': 'TextEdit', 'Haven_II': 'TextEdit', 'Polaris': 'TextEdit', 'Recovery_P': 'TextEdit', 'Strategy': 'TextEdit', 'Expressed_': 'TextEdit', 'ObjectID': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Numberofsettlementsinhromada_8.set('fieldImages', {'ADM3_EN': 'TextEdit', 'ADM3_UA': 'TextEdit', 'ADM3_RU': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_UA': 'TextEdit', 'ADM2_RU': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_UA': 'TextEdit', 'ADM1_RU': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_UA': 'TextEdit', 'ADM0_RU': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'AREA_SQKM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Admin3_UAn': 'TextEdit', 'Admin3_ENn': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'FID_': 'TextEdit', 'ADM3_EN_1': 'TextEdit', 'ADM3_UA_1': 'TextEdit', 'ADM3_PCO_1': 'TextEdit', 'ADM2_EN_1': 'TextEdit', 'ADM2_UA_1': 'TextEdit', 'ADM2_PCO_1': 'TextEdit', 'ADM1_EN_1': 'TextEdit', 'AREA_SQK_1': 'TextEdit', 'Admin3_U_1': 'TextEdit', 'Admin3_E_1': 'TextEdit', 'L1_share': 'TextEdit', 'L2_share': 'TextEdit', 'L3A_share': 'TextEdit', 'L3B_share': 'TextEdit', 'L3C_share': 'TextEdit', 'Occp_share': 'TextEdit', 'ACLED_3y': 'TextEdit', 'ACLED_3m': 'TextEdit', 'ACLED_3y_D': 'TextEdit', 'ACLED_3m_D': 'TextEdit', 'Deoccupied': 'TextEdit', 'ADM3_type': 'TextEdit', 'UKRSTAT_22': 'TextEdit', 'OXFORD_23': 'TextEdit', 'MidWntr_24': 'TextEdit', 'Haven_II': 'TextEdit', 'Polaris': 'TextEdit', 'Recovery_P': 'TextEdit', 'Strategy': 'TextEdit', 'Expressed_': 'TextEdit', 'ObjectID': 'TextEdit', 'Settlem': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Namesofhromadas_9.set('fieldImages', {'ADM3_EN': 'TextEdit', 'ADM3_UA': 'TextEdit', 'ADM3_RU': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_UA': 'TextEdit', 'ADM2_RU': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_UA': 'TextEdit', 'ADM1_RU': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_UA': 'TextEdit', 'ADM0_RU': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'AREA_SQKM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Admin3_UAn': 'TextEdit', 'Admin3_ENn': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'FID_': 'TextEdit', 'ADM3_EN_1': 'TextEdit', 'ADM3_UA_1': 'TextEdit', 'ADM3_PCO_1': 'TextEdit', 'ADM2_EN_1': 'TextEdit', 'ADM2_UA_1': 'TextEdit', 'ADM2_PCO_1': 'TextEdit', 'ADM1_EN_1': 'TextEdit', 'AREA_SQK_1': 'TextEdit', 'Admin3_U_1': 'TextEdit', 'Admin3_E_1': 'TextEdit', 'L1_share': 'TextEdit', 'L2_share': 'TextEdit', 'L3A_share': 'TextEdit', 'L3B_share': 'TextEdit', 'L3C_share': 'TextEdit', 'Occp_share': 'TextEdit', 'ACLED_3y': 'TextEdit', 'ACLED_3m': 'TextEdit', 'ACLED_3y_D': 'TextEdit', 'ACLED_3m_D': 'TextEdit', 'Deoccupied': 'TextEdit', 'ADM3_type': 'TextEdit', 'UKRSTAT_22': 'TextEdit', 'OXFORD_23': 'TextEdit', 'MidWntr_24': 'TextEdit', 'Haven_II': 'TextEdit', 'Polaris': 'TextEdit', 'Recovery_P': 'TextEdit', 'Strategy': 'TextEdit', 'Expressed_': 'TextEdit', 'ObjectID': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Russian_occupation_1.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Ukraine_recaptured_2.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Oblasts_3.set('fieldLabels', {'ADM1_EN': 'no label', 'ADM1_UA': 'no label', 'ADM1_RU': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_UA': 'no label', 'ADM0_RU': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'AREA_SQKM': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Selected_hromadas_4.set('fieldLabels', {'ADM3_EN': 'inline label', 'ADM3_UA': 'inline label', 'ADM3_RU': 'inline label', 'ADM3_PCODE': 'inline label', 'ADM2_EN': 'inline label', 'ADM2_UA': 'inline label', 'ADM2_RU': 'inline label', 'ADM2_PCODE': 'inline label', 'ADM1_EN': 'inline label', 'ADM1_UA': 'inline label', 'ADM1_RU': 'inline label', 'ADM1_PCODE': 'inline label', 'ADM0_EN': 'inline label', 'ADM0_UA': 'inline label', 'ADM0_RU': 'inline label', 'ADM0_PCODE': 'inline label', 'date': 'inline label', 'validOn': 'inline label', 'validTo': 'inline label', 'AREA_SQKM': 'inline label', 'Shape_Leng': 'inline label', 'Admin3_UAn': 'inline label', 'Admin3_ENn': 'inline label', 'Shape_Le_1': 'inline label', 'Shape_Area': 'inline label', 'FID_': 'inline label', 'ADM3_EN_1': 'inline label', 'ADM3_UA_1': 'inline label', 'ADM3_PCO_1': 'inline label', 'ADM2_EN_1': 'inline label', 'ADM2_UA_1': 'inline label', 'ADM2_PCO_1': 'inline label', 'ADM1_EN_1': 'inline label', 'AREA_SQK_1': 'inline label', 'Admin3_U_1': 'inline label', 'Admin3_E_1': 'inline label', 'L1_share': 'inline label', 'L2_share': 'inline label', 'L3A_share': 'inline label', 'L3B_share': 'inline label', 'L3C_share': 'inline label', 'Occp_share': 'inline label', 'ACLED_3y': 'inline label', 'ACLED_3m': 'inline label', 'ACLED_3y_D': 'inline label', 'ACLED_3m_D': 'inline label', 'Deoccupied': 'inline label', 'ADM3_type': 'inline label', 'UKRSTAT_22': 'inline label', 'OXFORD_23': 'inline label', 'MidWntr_24': 'inline label', 'Haven_II': 'inline label', 'Polaris': 'inline label', 'Recovery_P': 'inline label', 'Strategy': 'inline label', 'Expressed_': 'inline label', 'ObjectID': 'inline label', 'Settlem': 'inline label', });
lyr_Settlements_5.set('fieldLabels', {'ADM4_EN': 'no label', 'ADM4_UA': 'no label', 'ADM4_RU': 'no label', 'ADM4_PCODE': 'no label', 'ADM3_EN': 'no label', 'ADM3_UA': 'no label', 'ADM3_RU': 'no label', 'ADM3_PCODE': 'no label', 'ADM2_EN': 'no label', 'ADM2_UA': 'no label', 'ADM2_RU': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_UA': 'no label', 'ADM1_RU': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_UA': 'no label', 'ADM0_RU': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'AREA_SQKM': 'no label', 'Shape_Leng': 'no label', 'Admin4_UAn': 'no label', 'Admin4_ENn': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Nationalroads_6.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'length': 'no label', 'Shape_Leng': 'no label', });
lyr_Population2023_7.set('fieldLabels', {'ADM3_EN': 'no label', 'ADM3_UA': 'no label', 'ADM3_RU': 'no label', 'ADM3_PCODE': 'no label', 'ADM2_EN': 'no label', 'ADM2_UA': 'no label', 'ADM2_RU': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_UA': 'no label', 'ADM1_RU': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_UA': 'no label', 'ADM0_RU': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'AREA_SQKM': 'no label', 'Shape_Leng': 'no label', 'Admin3_UAn': 'no label', 'Admin3_ENn': 'no label', 'Shape_Le_1': 'no label', 'FID_': 'no label', 'ADM3_EN_1': 'no label', 'ADM3_UA_1': 'no label', 'ADM3_PCO_1': 'no label', 'ADM2_EN_1': 'no label', 'ADM2_UA_1': 'no label', 'ADM2_PCO_1': 'no label', 'ADM1_EN_1': 'no label', 'AREA_SQK_1': 'no label', 'Admin3_U_1': 'no label', 'Admin3_E_1': 'no label', 'L1_share': 'no label', 'L2_share': 'no label', 'L3A_share': 'no label', 'L3B_share': 'no label', 'L3C_share': 'no label', 'Occp_share': 'no label', 'ACLED_3y': 'no label', 'ACLED_3m': 'no label', 'ACLED_3y_D': 'no label', 'ACLED_3m_D': 'no label', 'Deoccupied': 'no label', 'ADM3_type': 'no label', 'UKRSTAT_22': 'no label', 'OXFORD_23': 'no label', 'MidWntr_24': 'no label', 'Haven_II': 'no label', 'Polaris': 'no label', 'Recovery_P': 'no label', 'Strategy': 'no label', 'Expressed_': 'no label', 'ObjectID': 'no label', 'ORIG_FID': 'no label', });
lyr_Numberofsettlementsinhromada_8.set('fieldLabels', {'ADM3_EN': 'no label', 'ADM3_UA': 'no label', 'ADM3_RU': 'no label', 'ADM3_PCODE': 'no label', 'ADM2_EN': 'no label', 'ADM2_UA': 'no label', 'ADM2_RU': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_UA': 'no label', 'ADM1_RU': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_UA': 'no label', 'ADM0_RU': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'AREA_SQKM': 'no label', 'Shape_Leng': 'no label', 'Admin3_UAn': 'no label', 'Admin3_ENn': 'no label', 'Shape_Le_1': 'no label', 'FID_': 'no label', 'ADM3_EN_1': 'no label', 'ADM3_UA_1': 'no label', 'ADM3_PCO_1': 'no label', 'ADM2_EN_1': 'no label', 'ADM2_UA_1': 'no label', 'ADM2_PCO_1': 'no label', 'ADM1_EN_1': 'no label', 'AREA_SQK_1': 'no label', 'Admin3_U_1': 'no label', 'Admin3_E_1': 'no label', 'L1_share': 'no label', 'L2_share': 'no label', 'L3A_share': 'no label', 'L3B_share': 'no label', 'L3C_share': 'no label', 'Occp_share': 'no label', 'ACLED_3y': 'no label', 'ACLED_3m': 'no label', 'ACLED_3y_D': 'no label', 'ACLED_3m_D': 'no label', 'Deoccupied': 'no label', 'ADM3_type': 'no label', 'UKRSTAT_22': 'no label', 'OXFORD_23': 'no label', 'MidWntr_24': 'no label', 'Haven_II': 'no label', 'Polaris': 'no label', 'Recovery_P': 'no label', 'Strategy': 'no label', 'Expressed_': 'no label', 'ObjectID': 'no label', 'Settlem': 'no label', 'ORIG_FID': 'no label', });
lyr_Namesofhromadas_9.set('fieldLabels', {'ADM3_EN': 'no label', 'ADM3_UA': 'no label', 'ADM3_RU': 'no label', 'ADM3_PCODE': 'no label', 'ADM2_EN': 'no label', 'ADM2_UA': 'no label', 'ADM2_RU': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_UA': 'no label', 'ADM1_RU': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_UA': 'no label', 'ADM0_RU': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'AREA_SQKM': 'no label', 'Shape_Leng': 'no label', 'Admin3_UAn': 'no label', 'Admin3_ENn': 'no label', 'Shape_Le_1': 'no label', 'FID_': 'no label', 'ADM3_EN_1': 'no label', 'ADM3_UA_1': 'no label', 'ADM3_PCO_1': 'no label', 'ADM2_EN_1': 'no label', 'ADM2_UA_1': 'no label', 'ADM2_PCO_1': 'no label', 'ADM1_EN_1': 'no label', 'AREA_SQK_1': 'no label', 'Admin3_U_1': 'no label', 'Admin3_E_1': 'no label', 'L1_share': 'no label', 'L2_share': 'no label', 'L3A_share': 'no label', 'L3B_share': 'no label', 'L3C_share': 'no label', 'Occp_share': 'no label', 'ACLED_3y': 'no label', 'ACLED_3m': 'no label', 'ACLED_3y_D': 'no label', 'ACLED_3m_D': 'no label', 'Deoccupied': 'no label', 'ADM3_type': 'no label', 'UKRSTAT_22': 'no label', 'OXFORD_23': 'no label', 'MidWntr_24': 'no label', 'Haven_II': 'no label', 'Polaris': 'no label', 'Recovery_P': 'no label', 'Strategy': 'no label', 'Expressed_': 'no label', 'ObjectID': 'no label', 'ORIG_FID': 'no label', });
lyr_Namesofhromadas_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});