#include <iostream>
using namespace std;

int main()
{
    int n;
    cin>>n;
    vector<int> adj=new vector<int>[n+1];
    
    for(int i=0;i<n-1;i++)
    {
        int u,v;
        cin>>u>>v;
        adj[u].push_back(v);
        adj[v].push_back(u);
       
    }
    for(int i=1;i<=n;i++)
    {
        for(int nb:adj[i])
        cout<<nb<<' ';
        cout<<'\n';
    }


} 
