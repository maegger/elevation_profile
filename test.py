import arcpy, sys

shp = sys.argv[1]

lyr = arcpy.mapping.Layer(shp)
result = arcpy.GetCount_management(lyr)
count = int(result.getOutput(0))
print shp
print("Anzahl von Geometrien im Shapefile: " + str(count))
print "Bitte schwarzes Fenster schliessen"
