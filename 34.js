f = [];

f[0] = 1;
for (i = 1; i <= 9; i++) {
  f[i] = f[i - 1] * i;
}

y = 1;
n = f[9];
while (y < n) {
  y = y * 10;
  n = n + f[9];
}
max = n;

ans = 0;
for (j = 10; j <= max; j++) {
  x = f[Math.floor(j / 10)] + f[j % 10];
  if (x == j) ans += j;
  f[j] = x;
}

document.write('ANS: ', ans);