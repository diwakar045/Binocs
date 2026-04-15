$p = 'd:\Antigravity\Binocs\index.html'
$a = [System.IO.File]::ReadAllLines($p)
$b = $a[0..543]
[System.IO.File]::WriteAllLines($p, $b)
Write-Host "Done. Lines: $($b.Count)"
