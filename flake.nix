{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      nixpkgs,
      flake-utils,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        targetPkgs = with pkgs; [
          nodejs
        ];
      in
      {
        devShells.default =
          if pkgs.stdenv.isDarwin then
            pkgs.mkShell {
              buildInputs = targetPkgs;
            }
          else
            pkgs.buildFHSEnv {
              name = "website";
              inherit targetPkgs;
            };
      }
    );
}
