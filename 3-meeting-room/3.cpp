#include <iostream>

using namespace std;

int q[50];

int main() {
    int T;
    cin >> T;
    while(T--) {
        int N;
        cin >> N;
        for(int i=0; i<50; i++) q[i] = 0;
        for(int i=0; i<N; i++) {
            int S,E;
            cin >> S >> E;
            q[S]++;
            q[E+1]--;
        }

        int ans = 0;
        int run = 0;
        for(int j=0; j<50; j++) {
            run += q[j];
            ans = ans > run ? ans : run;
        }
        cout << ans << endl;
    }
}
