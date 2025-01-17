//
//  CircleImage.swift
//  Landmarks
//
//  Created by Raghu Nema on 9/10/24.
//

import SwiftUI

struct CircleImage: View {
    var body: some View {
        Image("turtlerock")
            .clipShape(Circle())
            .overlay {
                Circle().stroke(
                    .white,
                    lineWidth: 4
                )
            }
            .shadow(radius: 3)
    }
}

#Preview {
    CircleImage()
}
