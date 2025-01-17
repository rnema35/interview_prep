//
//  ContentView.swift
//  Landmarks
//
//  Created by Raghu Nema on 9/10/24.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            MapView()
                .frame(height: 300)
            CircleImage()
                .offset(y: -130)
                .padding(.bottom, -130)
            VStack(alignment: .leading) {
                Text("Turtle Rock")
                    .font(.title)
                .foregroundColor(Color.black)
                HStack {
                    Text("Josuha Tree National Park")
                        .font(.subheadline)
                    Spacer()
                    Text("California")
                        .font(.subheadline)
                }
                .font(.subheadline)
                .foregroundStyle(.secondary)
                
                Divider()
                Text("About Turtle Rock")
                    .font(.title2)
                Text("Its a nice place")
            }
            .padding()
        }
        Spacer()
    }
}

#Preview {
    ContentView()
}
