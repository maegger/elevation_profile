<form>
    <input type="file" name="file" value="Select xyz-file" id="file" /> <a download="profile.txt" id="downloadlink" style="display: none" name="downloadlink"><b>Download elevation profile</b></a>
    <script type="text/javascript">
//<![CDATA[

            var textFile = null;
            makeTextFile = function (text) {
                var data = new Blob([text], {type: 'text/plain'});
                if (textFile !== null) {
                    window.URL.revokeObjectURL(textFile);
                }
                textFile = window.URL.createObjectURL(data);
                return textFile;
            };
            data = "";
            newline = "\r\n";
            document.getElementById('file').onchange = function () {
                var file = this.files[0];
                var reader = new FileReader();
                reader.onload = function (progressEvent) {
                    gesamtlaenge = 0;
                    var lines = this.result.split("\n");
                    for (var line = 0; line < lines.length; line++) {
                        if (line == 0){
                            data =  0 + " "+lines[line].split(" ")[2] + newline;
                        }
                        point_one = lines[line];
                        point_two = lines[line + 1];

                        if (point_two !== undefined && point_two.length > 0) {
                            split_1 = point_one.split(" ");
                            split_2 = point_two.split(" ");
                            xtwo = parseFloat(split_2[0]);
                            ytwo = parseFloat(split_2[1]);
                            xone = parseFloat(split_1[0]);
                            yone = parseFloat(split_1[1]);
                            gesamtlaenge = gesamtlaenge + Math.sqrt(((xtwo - xone) * (xtwo - xone)) + ((ytwo - yone) * (ytwo - yone)));
                            data = data  + gesamtlaenge + " " + split_2[2] + newline;
                            var link = document.getElementById('downloadlink');
                            link.href = makeTextFile(data);
                            link.style.display = 'block';
                        }
                    }
                };
                reader.readAsText(file);
            };
    //]]>
    </script>
</form>
