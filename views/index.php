<!DOCTYPE html>

<html>
<head>
<title>Dokumentasi API </title>
<link rel="stylesheet" type="text/css" href="http://dev.canisnfelis.com/apiyukmart/public_assets/bootstrap/css/bootstrap.min.css">
<script type="text/javascript" src="http://dev.canisnfelis.com/apiyukmart/public_assets/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
<h1>WELCOME</h1>
<p><h3>1.Get Data Home</h3></p>
<table>
<tr>
<th style="width: 200px">Item</th>
<th style="width: 200px">Type</th>
<th style="width: 500px">Link</th>
<th>Example</th>
</tr>
<tbody>
<tr>
<td>Data Recent</td>
<td>GET</td>
<td><a href="http://localhost:3000/Recent" target="_blank">http://localhost:3000/Recent</a></td>
</tr>
<tr>
<td></td>
<td>GET ID</td>
<td><a href="#">http://localhost:3000/Recent/[Date(Y)]/[Date(M)]/[Date(D)]/Y/0/0</a></td>
<td><a href="http://localhost:3000/Recent/2017/10/17/Y/0/0" target="_blank">http://localhost:3000/Recent/2017/10/17/Y/0/0</a></td>
</tr>
<tr>
<td>Data Berita Pilihan</td>
<td>GET</td>
<td><a href="http://localhost:3000/Bpilihan/" target="_blank">http://localhost:3000/Bpilihan</a></td>
</tr>
<tr>
<td></td>
<td>GET ID</td>
<td><a href="#">http://localhost:3000/Bpilihan/[hot]/[publish]/[Date(Y)]/[Date(M)]/[Date(D)]</a></td>
<td><a href="http://localhost:3000/Bpilihan/Y/Y/2017/10/17" target="_blank">http://localhost:3000/Bpilihan/Y/Y/2017/10/17</a></td>
</tr>
<tr>
<td>Data Populer</td>
<td>GET</td>
<td><a href="http://localhost:3000/Popular/" target="_blank">http://localhost:3000/Popular/</a></td>
</tr>
<tr>
<td></td>
<td>GET ID</td>
<td><a href="#">http://localhost:3000/Popular/[Date(Y)]/[Date(M)]/[Date(D)]</a></td>
<td><a href="http://localhost:3000/Popular/2017/10/17" target="_blank">http://localhost:3000/Popular/2017/10/17</a></td>
</tr>
<tr>
<td>Data Video</td>
<td>GET</td>
<td><a href="http://localhost:3000/Video/" target="_blank">http://localhost:3000/Video/</a></td>
</tr>
<tr>
<td></td>
<td>GET ID</td>
<td><a href="#">http://localhost:3000/Video/[Date(Y)]/[Date(M)]/[Date(D)]</a></td>
<td><a href="http://localhost:3000/Video/2017/10/17" target="_blank">http://localhost:3000/Video/2017/10/17</a></td>
</tr>
<tr>
<td>Data Photo</td>
<td>GET</td>
<td><a href="http://localhost:3000/Photo/" target="_blank">http://localhost:3000/Photo/</a></td>
</tr>
<tr>
<td></td>
<td>GET ID</td>
<td><a href="#">http://localhost:3000/Photo/[Date(Y)]/[Date(M)]/[Date(D)]/2</a></td>
<td><a href="http://localhost:3000/Photo/2017/10/17/2" target="_blank">http://localhost:3000/Photo/2017/10/17/2</a></td>
</tr>
<tr>
<td>Data Kolom</td>
<td>GET</td>
<td><a href="http://localhost:3000/Kolom/" target="_blank">http://localhost:3000/Kolom/</a></td>
</tr>
<tr>
<td></td>
<td>GET ID</td>
<td><a href="#">http://localhost:3000/Kolom/[Date(Y)]/[Date(M)]/[Date(D)]</a></td>
<td><a href="http://localhost:3000/Kolom/2017/10/17" target="_blank">http://localhost:3000/Kolom/2017/10/17</a></td>
</tr>
</tbody>
</table>
</body>
</html>