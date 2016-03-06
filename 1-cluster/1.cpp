#include <iostream>

using namespace std;

int t[100][100];
int N,M,K;

int near(int x, int y) {
    if(x < 0 || x >= M || y < 0 || y >= N) return 0;
    if(t[y][x]) {
        t[y][x] = 0;
        return 1 + near(x-1,y) + near(x+1,y) + near(x,y-1) + near(x,y+1);
    } else {
        return 0;
    }
}

void calc() {
    int max = 0;
    for(int i=0; i<N; i++) {
        for(int j=0; j<M; j++) {
            if(t[i][j] != 0) {
                int tmp = near(j,i);
                max = max > tmp ? max : tmp;
            }
        }
    }
    cout << max << endl;
}

int main() {
    int T;
    cin >> T;
    while(T--) {

        cin >> N >> M >> K;
        for(int i=0; i<N; i++) {
            for(int j=0; j<M; j++) t[i][j] = 0;
        }
        for(int i=0; i<K; i++) {
            int x,y;
            cin >> y >> x;
            t[y][x] = 1;
        }
        calc();
    }
}
