#include <iostream>
#include <cstring>

using namespace std;

long long t[1005][1005];

int main() {

    int T;
    cin >> T;
    while(T--) {
        int N,M,P;
        cin >> P >> M >> N;
        memset(t, 0, sizeof(t));
        for(int i=0; i<P; i++) {
            int x,y;
            cin >> x >> y;
            t[y+1][x+1]++;
        }
        for(int i=1; i<=N; i++) {
            for(int j=1; j<=M; j++) {
                t[i][j] += t[i-1][j];
                t[i][j] += t[i][j-1];
                t[i][j] -= t[i-1][j-1];
            }
        }
        /*for(int i=1; i<=N; i++) {
            for(int j=1; j<=M; j++) {
                cout << t[i][j] << " ";
            }
            cout << endl;
        }*/
        int Q;
        long long sum = 0;
        cin >> Q;
        for(int i=0; i<Q; i++) {
            int x,y,w,h;
            cin >> x >> y >> w >> h;
            x++; y++; w--; h--;
            y = y-h;
            int minx,miny,maxx,maxy;
            miny = y < 1 ? 1 : y;
            minx = x < 1 ? 1 : x;
            maxy = y+h >= N ? N : y+h;
            maxx = x+w >= M ? M : x+w;
            sum += t[maxy][maxx] - t[miny-1][maxx] - t[maxy][minx-1] + t[miny-1][minx-1];
        }
        cout << sum << endl;
    }

    return 0;
}
